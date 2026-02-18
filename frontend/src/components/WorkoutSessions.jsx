import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Push your limits with our high-energy cardio and strength sessions designed to burn fat, build endurance, and improve overall fitness. Whether you're a beginner or advanced, our guided sessions keep you motivated and on track.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Join our expert-led bootcamps designed to transform your body and mindset. Train harder, get stronger, and achieve results faster with structured programs tailored to your goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Fat Burn Program.</h4>
            <p>
            A high-intensity interval training session focused on maximum calorie burn in minimum time. Perfect for improving stamina, boosting metabolism, and accelerating fat loss.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning Camp</h4>
            <p>
            Build muscle, improve power, and enhance endurance with structured strength training combined with functional conditioning drills.
            </p>
          </div>
          <div>
            <h4>Core & Stability Training</h4>
            <p>
            Strengthen your core, improve balance, and reduce injury risk with focused abdominal and stability exercises.
            </p>
          </div>
          <div>
            <h4>Endurance Builder Camp</h4>
            <p>
            Designed to increase cardiovascular capacity and muscular endurance through progressive cardio and resistance training routines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
