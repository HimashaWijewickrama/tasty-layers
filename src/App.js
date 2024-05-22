import "./App.css";
import AboutusView from "./pages/aboutus/aboutus.view";
import Home from "./pages/home";
import Footer from "./components/footer";
import ReviewContainer from "./pages/review/review.container";
import ProductContainer from "./pages/product/product.container";
import ContactusContainer from "./pages/contactus/contactus.container";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutusView/>
      <ProductContainer />
      <ReviewContainer />
      <ContactusContainer />
      <Footer />
    </div>
  );
}

export default App;
