// modules import
import { Route, Routes } from "react-router-dom";
// pages import

import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/contactUs/Contact";
import IndividualRecipe from "../pages/recipe/IndividualRecipe";
import Recipe from "../pages/recipe/Recipe";
import Error from "./Error";
// styles import

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contactus" element={<Contact></Contact>} />
        <Route path="/recipes" element={<Recipe></Recipe>} />
        <Route
          path="/recipes/:recipeId"
          element={<IndividualRecipe></IndividualRecipe>}
        />
        <Route path="/aboutus" element={<AboutUs></AboutUs>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default RoutesComponent;
