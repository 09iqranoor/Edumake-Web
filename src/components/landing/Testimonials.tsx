import React from "react";
import "./Testimonial.css";
import SectionBadge from "./SectionBadge";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Wilson",
    role: "School Administrator",
    text: "EduMake has completely transformed how we manage our school. ",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "John Ken",
    role: "Teacher",
    text: "The personalized learning tools have helped my students stay engaged and motivated.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "David Williams",
    role: "Parent",
    text: "I love how easy it is to track my child’s progress.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Gerald Doe",
    role: "Student",
    text: "The app makes studying so much easier. The lessons are simple, interactive, and fun. I actually enjoy learning now!",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Owen Shaw",
    role: "Principal",
    text: "Our communication has improved significantly. Teachers, parents, and students are more connected than ever.",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
  {
    name: "Gerald Doe",
    role: "Principal",
    text: "Our communication has improved significantly. ",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
];

// const TestimonialCard: React.FC<Testimonial> = ({ name, role, text, avatar }) => (
//   <div className="testimonial-card">
//     <div className="quote"><img src="/icons/quote-right.png" className="quoteicon" alt="" /></div>
//     <div className="user">
//       <img src={avatar} alt={name} />
//       <div>
//         <h4>{name}</h4>
//         <p>{role}</p>
//       </div>
//     </div>
//     <p className="message">{text}</p>
//   </div>
// );

const TestimonialCard: React.FC<Testimonial> = ({ name, role, text, avatar }) => (
  <div className="testimonial-card">
    <div className="quote">
      <img src="/icons/quote-right.png" className="quoteicon" alt="quote" />
    </div>
    <div className="user">
      <img src={avatar} alt={name} />
      <div className="user-info">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
    <p className="message">{text}</p>
  </div>
);

const Testimonials: React.FC = () => {
  // Split testimonials into two groups for two rows
  const firstRowTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRowTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));

  // Duplicate testimonials for seamless animation
  const firstRowDuplicated = [...firstRowTestimonials, ...firstRowTestimonials];
  const secondRowDuplicated = [...secondRowTestimonials, ...secondRowTestimonials];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="left">
          <SectionBadge
            text="Testimonials"
            logo="/logo.png"
          />
          <h2>Trusted by Schools and Learners Everywhere</h2>
          <p>
            Select a plan that works for you and enjoy full access to EduMake's powerful features.
          </p>
        </div>

        <div className="grid">
          {/* FIRST ROW - Moves LEFT */}
          <div className="column column-up">
            {firstRowDuplicated.map((item, index) => (
              <TestimonialCard key={`row1-${index}`} {...item} />
            ))}
          </div>

          {/* SECOND ROW - Moves RIGHT */}
          <div className="column column-down">
            {secondRowDuplicated.map((item, index) => (
              <TestimonialCard key={`row2-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
