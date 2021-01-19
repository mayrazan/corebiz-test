import { Image } from "../Image/Image";
import logo from "../../assets/images/site-logo-corebiz-preto-cinza.svg";
import { Input } from "../Input/Input";
import { Text } from "../Text/Text";
import cartIcon from "../../assets/icons/shopping-cart1.svg";
import { Span } from "../Span/Span";
import menuIcon from "../../assets/icons/Icon-menu.svg";
import "./Header.scss";

export function Header({ value, search, setValue }) {
  const cartValue =
    value > 0 ? "cart-full cart-value" : "cart-empty cart-value";

  return (
    <header className="header">
      <Image src={menuIcon} alt="menu" className="menu"></Image>
      <Image src={logo} alt="logo corebiz" className="logo-corebiz" />
      <Input
        type="text"
        placeholder="O que está procurando?"
        className="input-search"
        setValue={setValue}
        value={search}
      />
      <Text text="Minha Conta" className="my-account-text" />
      <Span className={cartValue} value={value}>
        <Image src={cartIcon} alt="carrinho" className="cart-icon" />
      </Span>
    </header>
  );
}
