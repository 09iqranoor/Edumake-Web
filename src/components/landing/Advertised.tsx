import React from "react";
import "./Advertised.css";

const Advertised: React.FC = () => {
  return (
    <section className="image-section">
      <picture>
     
        <source 
          srcSet="/advertised-mobile.png" 
          media="(max-width: 767px)" 
        />
        
     
        <img
          src="/advertised.png"
          alt="Center Visual"
          className="center-image"
        />
      </picture>
    </section>
  );
};

export default Advertised;