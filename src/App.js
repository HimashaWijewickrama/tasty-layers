import "./App.css";
import AboutusView from "./pages/aboutus/aboutus.view";
import Home from "./pages/home";
import Footer from "./components/footer";
import ReviewContainer from "./pages/review/review.container";
import ProductContainer from "./pages/product/product.container";
import ContactusContainer from "./pages/contactus/contactus.container";
import NavBar from "./components/navBar";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <NavBar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="aboutus">
        <AboutusView />
      </Element>
      <Element name="product">
        <ProductContainer />
      </Element>
      <Element name="review">
        <ReviewContainer />
      </Element>
      <Element name="contactus">
        <ContactusContainer />
      </Element>
      <Footer />
    </>
  );
}

export default App;
