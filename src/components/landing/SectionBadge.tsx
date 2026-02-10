import React from "react";
import "./SectionBadge.css";

interface SectionBadgeProps {
  text: string;
  logo: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ text, logo }) => {
  return (
    <div className="section-badge">
      <div className="badge-logo">
        <img src={logo} alt="logo" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default SectionBadge;
