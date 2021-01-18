import { useEffect, useState } from "react";
import { getProducts } from "../../../services/ProductsList";
import { Image } from "../../Image/Image";
import { Section } from "../../Section/Section";
import { Span } from "../../Span/Span";
import { Text } from "../../Text/Text";
import { Button } from "../../Button/Button";
import ReactStars from "react-rating-stars-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Products.scss";

export function Products({ onClick }) {
  const [products, setProducts] = useState([]);
  // const style = {
  //   textDecorationLine: "lineThrough",
  // };

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <>
        <Button className="btn-arrows btn-left" onClick={() => previous()} />
        <Button className="btn-arrows btn-right" onClick={() => next()} />
      </>
    );
  };

  function formatNumber(value) {
    const result = value / 100;
    const format = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return format;
  }

  return (
    <div className="products-container">
      <Section className="title-section">
        <Text text="Mais Vendidos" className="title-products" />
      </Section>

      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="item-list"
        showDots
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
        infinite={true}
        centerMode={false}
      >
        {products.map((product) => {
          return (
            <Section key={product.productId} className="products-section">
              <Image src={product.imageUrl}></Image>

              <Text
                text={product.productName}
                className="products-information-text"
              ></Text>

              <Span>
                <ReactStars
                  count={5}
                  value={product.stars}
                  edit={false}
                  activeColor="#F8475F"
                  color="lightGray"
                ></ReactStars>
              </Span>

              <Text
                text={
                  product.listPrice === null
                    ? ""
                    : `de ${formatNumber(product?.listPrice)}`
                }
                className="products-information-text"
              ></Text>

              <Text
                text={`por ${formatNumber(product.price)}`}
                className="product-price"
              ></Text>

              {product.installments === null
                ? ""
                : product.installments.map((data) => {
                    return (
                      <Text
                        key={data}
                        text={`ou em ${data.quantity}x de ${formatNumber(data.value)}`}
                        className="products-information-text"
                      />
                    );
                  })}

              <Button
                text="COMPRAR"
                className="btn-shopping"
                onClick={onClick}
              ></Button>
            </Section>
          );
        })}
      </Carousel>
    </div>
  );
}
