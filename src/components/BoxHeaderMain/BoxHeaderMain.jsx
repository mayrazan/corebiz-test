import { useState } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export function BoxHeaderMain() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState("");

  function onClick() {
    setCount(count + 1);
  }

  function onChange(value) {
    setProducts(value);
  }

  return (
    <>
      <Header value={count} search={products} setValue={onChange} />
      <Main onClick={onClick} list={products} />
    </>
  );
}
