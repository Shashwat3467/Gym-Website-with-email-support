import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import { sendEmail } from "./utils/sendEmail.js";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, ".env") });

const app = express();
const router = express.Router();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {

    const newQuery = {
      name,
      email,
      message,
      date: new Date(),
    };

    const filePath = path.join(__dirname, "data", "queries.json");

    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");

      if (fileContent) {
        existingData = JSON.parse(fileContent);
      }
    }

    existingData.push(newQuery);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    console.log("New message received from:", email);

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("testing the ci pipeline");
  console.log(`Server listening to port ${process.env.PORT}`);
});