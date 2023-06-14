import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 100;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
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

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={isMenuOpen ? "menu-items active" : "menu-items"}>
          <li>
            <NavLink exact to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes" onClick={toggleMenu}>
              Recipe's
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
