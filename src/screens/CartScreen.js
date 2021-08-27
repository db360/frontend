import React from "react";


export default function CartScreen(props) {
  const productId = props.match.params.id;
  console.log(props)
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    console.log(productId)
  return (
    <div>
        <h1>Cart Screen</h1>
        <p>
          ADD TO CART : ProductID: {productId} Qty: {qty}
        </p>
    </div>
  );
}
