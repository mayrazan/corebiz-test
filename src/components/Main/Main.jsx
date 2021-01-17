import { CarouselImages } from "./CarouselImages/CarouselImages";
import "./Main.scss";
import { Products } from "./Products.jsx/Products";

export function Main() {
  return (
    <main className="main-container">
      <CarouselImages />
      <Products></Products>
    </main>
  );
}
