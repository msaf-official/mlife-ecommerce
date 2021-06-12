import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";
import Trending from "./components/Trending/Trending"
import ProductCard from "./components/ProductCard/ProductCard"
import ApplinceceSlider from "./components/ApplicenceSlider/ApplinceceSlider"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Trending/>
      <ProductCard topic={"Top Categories"}/>
      <ProductCard topic={"New Arrival"}/>
      <ApplinceceSlider topic="Electrical Appliences"/>
      <ApplinceceSlider  topic="Home Appliences"/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default App;
