import React from 'react';
import './AboutUs.css';
import SectionBadge from './SectionBadge';

const AboutUs: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <SectionBadge text="About Us" logo="/logo.png" />
                    <h2>Building Better Learning Experiences for Schools.</h2>
                    <p>
                        Edu-Make is designed to simplify teaching and learning by bringing assignments, communication,
                        and progress tracking into one easy-to-use platform for schools.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-left">
                        <p>
                            Edu-Make is a modern, all-in-one education management platform designed to
                            simplify school operations, improve communication, and support better learning
                            outcomes.
                        </p>
                        <p>
                            We exist to bridge the gap between education and technology by providing
                            schools with secure, user-friendly, and scalable digital tools. Edu-Make helps school
                            owners, administrators, teachers, parents, and students manage academic and
                            administrative activities seamlessly anytime, anywhere.
                        </p>
                        <p>
                            Our platform brings together essential school functions in one place, including
                            student records, attendance tracking, class management, communication,
                            messaging, notifications, reports, and data security. By reducing paperwork and
                            manual processes, Edu-Make allows educators to focus more on teaching while
                            schools operate more efficiently.
                        </p>
                        <p>
                            Built with reliability, privacy, and ease of use at its core, Edu-Make is designed to
                            serve primary schools, secondary schools, colleges, and educational institutions
                            across Africa and beyond.
                        </p>
                        <p>
                            At Edu-Make, we believe that when schools are empowered with the right
                            technology, learning becomes more organized, accessible, and impactful for
                            everyone involved.
                        </p>
                    </div>
                    <div className="about-right">
                        <div className="logo-box">
                            <div className="logo-circle">
                                <img src="/logo.png" alt="Edu-Make Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
