import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Top Bar - Logo only on mobile, Logo + Socials on desktop/tablet */}
      <div className="footer-top">
        <div className="logo">
          <img src="/logo.png" alt="Edu-Make" />
          <span>EDU-MAKE</span>
        </div>

        {/* Desktop/Tablet Social Icons */}
        <div className="socials">
          <a href="#">
            <img src="/icons/fb.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/icons/linkdin.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/icons/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>

      <hr />

      {/* Main Content */}
      <div className="footer-content">
        <div className="footer-about">
          <p>
            EduMake helps students, parents, and schools stay connected through
            personalized learning tools and seamless academic management.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>FAQs</li>
            <li>Testimonials</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Features</h4>
          <ul>
            <li>Admin & Staff</li>
            <li>Payment Management</li>
            <li>School Management</li>
            <li>Parent Engagement</li>
            <li>Analytics & Reports</li>
            <li>Student Management</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Contact Information</h4>
          <ul>
            <li>Email: support@edumake.com</li>
            <li>Phone: +234 812 345 6789</li>
          </ul>
        </div>
      </div>

      <hr />

    

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 EduMake. All rights reserved.</p>

        <div className="policies">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
        {/* Mobile Social Icons (only visible on mobile) */}
      <div className="mobile-socials">
        <a href="#">
          <img src="/icons/fb.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/icons/linkdin.png" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;