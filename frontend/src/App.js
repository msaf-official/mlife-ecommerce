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
      <h1 style={{textAlign:"center"}}>New Trending</h1>
      <ProductCard/>
      <h1 style={{textAlign:"center"}}>New Arrivals</h1>
      <ProductCard/>
      <ApplinceceSlider/>
    </>
  );
}

export default App;
