import { URL_API } from "./api";

export async function getProducts() {
  const products = await fetch(URL_API).then((response) =>
    response.json().then((data) => data)
  );

  return products;
}
