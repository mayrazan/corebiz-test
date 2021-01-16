import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Span } from "../Span/Span";
import { dataCarousel } from "../../mocks/dataCarousel";
import { Text } from "../Text/Text";
import "./CarouselImages.scss";

export function CarouselImages() {
  return (
    <Carousel
      showIndicators={true}
      showStatus={false}
      infiniteLoop={true}
      autoPlay
      showArrows={false}
      transitionTime={350}
      showThumbs={false}
    >
      {dataCarousel.map((index) => {
        return (
          <Span key={index} className="span-container">
            <Text text={index.text} className="carousel-text"></Text>
            {index.img}
          </Span>
        );
      })}
    </Carousel>
  );
}
