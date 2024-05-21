import "./App.css";
import AboutusView from "./pages/aboutus/aboutus.view";
import ContactUsView from "./pages/contactUs.view";
import Home from "./pages/home";
import Footer from "./pages/footer";
import ReviewContainer from "./pages/review/review.container";
import ProductContainer from "./pages/product/product.container";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutusView/>
      <ProductContainer />
      <ReviewContainer />
      {/* <ContactUsView /> */}
      <Footer />
    </div>
  );
}

export default App;
