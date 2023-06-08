// library import

// component import
import RoutesComponent from "./component/RoutesComponent";
import Navigation from "./component/Navigation";
// style import
import "./main.css";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <div id="main">
        <Navigation />
        {/* all routes for the project  */}
        <RoutesComponent />
        <Footer />
      </div>
    </>
  );
};

export default App;
