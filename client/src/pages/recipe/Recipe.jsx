import React, { useEffect, useState } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";
const Recipe = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewByCat, setViewByCat] = useState(false);
  const [BreakFast, setBreakFast] = useState([]);
  const [Dinner, setDinner] = useState([]);
  const [Lunch, setLunch] = useState([]);
  const [AllData, setAllData] = useState([]);

  const handleCategoryChange = (event, category) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    selectedCategories.map((categorie) => {
      fetchRecipesByCategories(categorie);
    });
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const initialFetch = () => {
    const url = `https://cooking-site.onrender.com/recipes`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((error) => {
        console.log("Error fetching recipes: ", error);
      });
  };

  const fetchRecipesByCategories = (categorie) => {
    setViewByCat(true);
    const url = `https://cooking-site.onrender.com/recipes/category/${categorie}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (categorie === "Lunch") {
          setLunch(data);
        }
        if (categorie === "Dinner") {
          setDinner(data);
        }
        if (categorie === "BreakFast") {
          setBreakFast(data);
        }
      })
      .catch((error) => {
        console.log("Error fetching recipes: ", error);
      });
  };

  return (
    <div className="container wrapper Recipe">
      <div className="recipe-content">
        <div className="options">
          <div className="options-container">
            <h3>Category</h3>
            <form className="form-option" onSubmit={handleSubmit}>
              {/* <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedCategories.includes("All")}
                  onChange={(event) => handleCategoryChange(event, "Dinner")}
                />
                All
              </label> */}
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedCategories.includes("Dinner")}
                  onChange={(event) => handleCategoryChange(event, "Dinner")}
                />
                Dinner
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedCategories.includes("Lunch")}
                  onChange={(event) => handleCategoryChange(event, "Lunch")}
                />
                Lunch
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedCategories.includes("BreakFast")}
                  onChange={(event) => handleCategoryChange(event, "BreakFast")}
                />
                Breakfast/Brunch
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="view">
          {!viewByCat && (
            <div className="view-container">
              {AllData.map((recipe) => (
                <div className="recipe-card" key={recipe._id}>
                  <Link to={`/recipes/${recipe._id}`}>
                    <div className="image-container">
                      <img
                        className="image"
                        src={recipe.images[0]}
                        alt={recipe.name}
                      />
                    </div>
                    <h2>{recipe.name}</h2>
                    <p>Tags: {recipe.tags.join(", ")}</p>
                    <p>{recipe.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {viewByCat && (
            <div className="view-container">
              {Dinner.length !== 0 &&
                selectedCategories.includes("Dinner") &&
                Dinner.map((recipe) => (
                  <div className="recipe-card" key={recipe._id}>
                    <Link to={`/recipes/${recipe._id}`}>
                      <div className="image-container">
                        <img
                          className="image"
                          src={recipe.images[0]}
                          alt={recipe.name}
                        />
                      </div>
                      <h2>{recipe.name}</h2>
                      <p>Tags: {recipe.tags.join(", ")}</p>
                      <p>{recipe.description}</p>
                    </Link>
                  </div>
                ))}
              {Lunch.length !== 0 &&
                selectedCategories.includes("Lunch") &&
                Lunch.map((recipe) => (
                  <div className="recipe-card" key={recipe._id}>
                    <Link to={`/recipes/${recipe._id}`}>
                      <div className="image-container">
                        <img
                          className="image"
                          src={recipe.images[0]}
                          alt={recipe.name}
                        />
                      </div>
                      <h2>{recipe.name}</h2>
                      <p>Tags: {recipe.tags.join(", ")}</p>
                      <p>{recipe.description}</p>
                    </Link>
                  </div>
                ))}
              {BreakFast.length !== 0 &&
                selectedCategories.includes("BreakFast") &&
                BreakFast.map((recipe) => (
                  <div className="recipe-card" key={recipe._id}>
                    <Link to={`/recipes/${recipe._id}`}>
                      <div className="image-container">
                        <img
                          className="image"
                          src={recipe.images[0]}
                          alt={recipe.name}
                        />
                      </div>
                      <h2>{recipe.name}</h2>
                      <p>Tags: {recipe.tags.join(", ")}</p>
                      <p>{recipe.description}</p>
                      <button></button>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
