import React, { useState } from "react";
import Recieve from "../Recieve/Recieve";

export default function Send() {
  let prodArray = [
    {
      id: 1,
      pName: "Iphone",
      price: 50000,
      onSale: true,
      desc: "good",
      counter: 0,
    },

    {
      id: 2,
      pName: "Oppo",
      price: 20000,
      onSale: false,
      desc: "good",
      counter: 0,
    },

    {
      id: 3,
      pName: "TV",
      price: 30000,
      onSale: false,
      desc: "good",
      counter: 0,
    },

    {
      id: 4,
      pName: "PC",
      price: 55000,
      onSale: true,
      desc: "good",
      counter: 0,
    },

    {
      id: 5,
      pName: "Samsung",
      price: 40000,
      onSale: true,
      desc: "good",
      counter: 0,
    },

    {
      id: 6,
      pName: "Pods",
      price: 1000,
      onSale: false,
      desc: "good",
      counter: 0,
    },
  ];
  
  let [products, setProducts] = useState(prodArray);

  function deleteProd(prodId) {
    let newProducts = products.filter((product) => product.id !== prodId);
    setProducts(newProducts);
  }

  return (
    <>
      <div>
        Parent
        <div className="container text-2xl bg-info p-4">
          <div className="row">
            {products.map((product) => (<Recieve product={product} delProd={deleteProd} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}