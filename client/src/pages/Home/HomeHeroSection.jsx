import { NavLink } from "react-router-dom";
import heroImg from "../../../assets/hero.jpg";
import { gsap } from "gsap";
import { useEffect } from "react";
const HomeHeroSection = () => {
  useEffect(() => {
    {
      var t1 = gsap.timeline();
      t1.from(".homeherosection", {
        y: "-100%",
        duration: 0.6,
        delay: 0.1,
        scale: 0,
      });
      t1.to(".homeherosection", {
        y: "0%",
        duration: 0.6,
        delay: 0.1,
        scale: 1,
      });
    }
  }, []);

  return (
    <div className="homeherosection">
      <img src={heroImg} className="heroImg" alt="" />
      <div className="mask-layer"></div>
      <div className="hero-content">
        <h2>Unleash Your Culinary Creativity with Our Mouthwatering Recipes</h2>
        <p>
          Welcome to We Cook! Discover a world of delectable recipes that will
          tantalize your taste buds and inspire your culinary journey. From
          quick and easy dishes to gourmet delights
        </p>
        <div className="action">
          <NavLink to="/recipes ">Check Out</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
