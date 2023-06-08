import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const IndividualRecipe = () => {
  let { recipeId } = useParams();
  const [Loading, setLoading] = useState(true);
  const [individualRecipe, setIndividualRecipe] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://cooking-site.onrender.com/recipes/id/${recipeId}`)
        .then((response) => response.json())
        .then((data) => {
          setIndividualRecipe(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    useTransform: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    afterChange: (index) => setCurrentSlide(index),
  };
  return (
    <div className="container">
      {Loading && <h2 className="loading">Loading </h2>}

      {!Loading && (
        <div className="loaded">
          <>
            <div className="recipe-header">
              <h1 className="recipe-title">{individualRecipe.name}</h1>
            </div>

            <p className="recipe-introduction">
              <h3>Introduction</h3>
              {individualRecipe.introduction}
            </p>
            <div className="recipe-description section-sm">
              <h3>Description</h3>
              {individualRecipe.description}
            </div>
            <div className="recipe-info">
              <div>Prep Time: {individualRecipe.prepTime}</div>
              <div>Cook Time: {individualRecipe.cookTime}</div>
              <div>Total Time: {individualRecipe.totalTime}</div>
              <div>Yield: {individualRecipe.yield}</div>
            </div>
            <div className="recipe-ingredients">
              <h2>Ingredients:</h2>
              <ul>
                {individualRecipe.ingredients &&
                  individualRecipe.ingredients.map((ingredient) => (
                    <li key={ingredient._id}>{ingredient.name}</li>
                  ))}
              </ul>
            </div>
            <div className="recipe-notes">
              <h2>Notes:</h2>
              <p>{individualRecipe.notes}</p>
            </div>
            <div className="recipe-images">
              <h2>Images:</h2>
              <Slider {...settings}>
                {individualRecipe.images &&
                  individualRecipe.images.map((image, index) => (
                    <div className="slide-img-container">
                      <img
                        className="slide-img"
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
            <div className="recipe-nutrition">
              <h2>Nutrition Facts:</h2>
              <table>
                <tbody>
                  {individualRecipe.nutritionFacts &&
                    Object.entries(individualRecipe.nutritionFacts).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td>
                            <strong>{key}:</strong>
                          </td>
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>
            </div>

            <div className="recipe-source">
              <h2>Source:</h2>
              <p>
                Recipe by{" "}
                <a
                  href={individualRecipe.source.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {individualRecipe.source.name}
                </a>
              </p>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default IndividualRecipe;
