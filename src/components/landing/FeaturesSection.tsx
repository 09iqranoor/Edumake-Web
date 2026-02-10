import React from "react";
import "./FeaturesSection.css";
import SectionBadge from "./SectionBadge";
// import feature1 from "../../features/feature1.png";


interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "Admin & Staff",
    description:
      "The Edu-Make platform streamlines all administrative, student, and staffing needs, empowering schools to operate efficiently and effortlessly.",
    image: "/feature1.png",
  },
  {
    title: "Payment Management",
    description:
      "The system simplifies school fee tracking and ensures efficient financial oversight with automated invoicing and real-time payment updates.",
    image: "/feature2.png",
  },
  {
    title: "School Management",
    description:
      "It revolutionizes school operations by offering a centralized platform for streamlined administration, effective communication, and enhanced engagement.",
    image: "/feature3.png",
  },
  {
    title: "Parent Engagement",
    description:
      "The platform keeps parents actively involved in their child’s education by providing real-time updates on attendance, grades, assignments, & announcements.",
    image: "/feature4.png",
  },
  {
    title: "Analytics & Reports",
    description:
      "Gain powerful insights into student performance, attendance trends, and operational efficiency through customizable reports and real-time data visualization.",
    image: "/feature5.png",
  },
  {
    title: "Student Management",
    description:
      "A comprehensive solution to oversee and support every aspect of student development, featuring streamlined real-time grade updates and secure data management.",
    image: "/feature3.png",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-header">
        <SectionBadge
          text="Our Features"
          logo="/logo.png"
        />
        <h2>Powerful Features Built for Smarter Learning</h2>
        <p>
          Discover tools designed to simplify school management, enhance
          learning, and keep your entire community connected.
        </p>
      </div>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
