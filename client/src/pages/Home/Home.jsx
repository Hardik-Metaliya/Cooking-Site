import HomeHeroSection from "./HomeHeroSection";
import "./Home.css";
import FeaturedRecipes from "./FeaturedRecipes";
import About from "./About";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <section id="Homepage wrapper">
      <div className="homepage-container ">
        <HomeHeroSection />
        <FeaturedRecipes />
        <About />
        <Testimonial />
      </div>
    </section>
  );
};
export default Home;
