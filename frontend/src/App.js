import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";
import Trending from "./components/Trending/Trending"
import ProductCard from "./components/ProductCard/ProductCard"
import ApplinceceSlider from "./components/ApplicenceSlider/ApplinceceSlider"
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Trending/>
      <ProductCard topic={"Top Categories"}/>
      <ProductCard topic={"New Arrival"}/>
      <ApplinceceSlider/>
    </>
  );
}

export default App;
