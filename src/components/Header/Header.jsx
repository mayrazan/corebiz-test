import { Image } from "../Image/Image";
import logo from "../../assets/images/site-logo-corebiz-preto-cinza.svg";
import { Input } from "../Input/Input";
import { Text } from "../Text/Text";
import cartIcon from "../../assets/icons/shopping-cart1.svg";
import { Span } from "../Span/Span";
import menuIcon from "../../assets/icons/Icon-menu.svg";
import "./Header.scss";
//import { useEffect, useState } from "react";

export function Header() {
  // const [width, setWidth] = useState(window.visualViewport.width);

  // useEffect(() => {
  //   setWidth(window.visualViewport.width);
  //   window.visualViewport.addEventListener("resize", setWidth);
  // }, [width]);

  return (
    <header className="header">
      <Image src={menuIcon} alt="menu" className="menu"></Image>
      <Image src={logo} alt="logo corebiz" className="logo-corebiz" />
      <Input
        type="text"
        placeholder="O que está procurando?"
        className="input-search"
      />
      <Text text="Minha Conta" className="my-account-text" />
      <Span className="cart-value" value={0}>
        <Image src={cartIcon} alt="carrinho" className="cart-icon" />
      </Span>
    </header>
  );
}
