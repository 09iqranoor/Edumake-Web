import React from "react";
import "./WhoWeServe.css";
import SectionBadge from "./SectionBadge";

const WhoWeServe: React.FC = () => {
  return (
    <section className="who-section">
      {/* Header */}
      <div className="who-header">
      <SectionBadge
  text="Who We Serve"
  logo="/images/edu-make-logo.png"
/>

        <h2>Built for Schools, Designed for People</h2>
        <p>
          We empower learners, educators, and administrators with solutions
          that simplify education and strengthen collaboration.
        </p>
      </div>

      {/* Content */}
      <div className="who-content">
        {/* Left */}
        <div className="who-left">
          <div className="who-item">
            <div className="icon-box">

              <img src="/icons/user-octagon.png" alt="" />
            </div>
            <h4>School Management</h4>
            <p>
              Simplify daily operations, manage admissions, oversee finances,
              track performance, and maintain compliance all in one place.
            </p>
          </div>
 
          <div className="who-item">
            <div className="icon-box"> <img src="/icons/profile2-user.png" alt="" /></div>
            <h4>Teachers & Staff</h4>
            <p>
              Access powerful tools for lesson planning, grading, attendance
              tracking, and seamless communication.
            </p>
          </div>

          <div className="who-item">
            <div className="icon-box"> <img src="/icons/user-tag.png" alt="" /></div>
            <h4>Parents & Guardians</h4>
            <p>
              Stay connected to your child’s academic progress, receive
              real-time updates, and collaborate easily.
            </p>
          </div>

          <div className="who-item">
            <div className="icon-box"> <img src="/icons/profile.png" alt="" /></div>
            <h4>Students</h4>
            <p>
              Enjoy a user-friendly platform for assignments, schedules,
              performance tracking, and communication.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="who-right">
          <img
            src="/about.png"
            alt="Edu-Make Dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
