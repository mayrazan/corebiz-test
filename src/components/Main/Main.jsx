import { CarouselImages } from "./CarouselImages/CarouselImages";
import "./Main.scss";
import { Products } from "./Products.jsx/Products";
import { Newsletter } from "./Newsletter/Newsletter";

export function Main() {
  return (
    <main className="main-container">
      <CarouselImages />
      <Products />
      <Newsletter />
    </main>
  );
}
