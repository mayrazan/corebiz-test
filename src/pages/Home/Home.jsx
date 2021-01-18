import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";

export function Home() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Header value={count} />
      <Main onClick={onClick} />
      <Footer />
    </>
  );
}
