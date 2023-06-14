import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cooking-site.onrender.com/recipes/limitrecipes?limit=5`
        );
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log("Error fetching recipes: ", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    lazyLoad: true,
    useTransform: false,
    prevArrow: (
      <button
        className="slick-prev"
        onClick={() => sliderRef.current.slickPrev()}
      >
        Previous
      </button>
    ),
    nextArrow: (
      <button
        className="slick-next"
        onClick={() => sliderRef.current.slickNext()}
      >
        Next
      </button>
    ),
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container slider section-lg">
      <div className="content-container">
        <h2>Featured Recipes</h2>
        <div className="featured-recipes-buttons">
          <button
            className="prev-button"
            onClick={() => sliderRef.current.slickPrev()}
          >
            &larr;
          </button>
          <button
            className="next-button"
            onClick={() => sliderRef.current.slickNext()}
          >
            &rarr;
          </button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {recipes.map((recipe) => (
          <div key={recipe._id} className="slide">
            <div className="slider-img-container">
              <img
                className="slider-img"
                src={recipe.images[1]}
                alt={recipe.name}
              />
            </div>
            <div className="tags">
              {recipe.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h4>{recipe.name}</h4>
            <p>{recipe.description.slice(0, 100)}</p>
            <button className="link-to-recipe">
              <Link to={`/recipes/${recipe._id}`}>read more</Link>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FeaturedRecipes;
