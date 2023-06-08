import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Adjust the scroll threshold as needed
      const scrollThreshold = 100;

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollTop = () => {
      const scrollTop = window.pageYOffset;

      // Adjust the scroll threshold as needed
      const scrollThreshold = 0;

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);
  return (
    <nav className={isScrolled ? "scrolledNav mainNav" : "mainNav"}>
      <div className="Nav-container">
        <div className="logo">
          <NavLink to="/">
            <h3>
              We <span>Cook</span>
            </h3>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipe's </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">Aboutus</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
