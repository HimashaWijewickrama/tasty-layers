import "./App.css";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Products from "./pages/products";
import Review from "./pages/review";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Products />
      <Review />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
