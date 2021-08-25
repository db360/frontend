import React from 'react'
import Rating from './Rating';

const Product = (props) => {    // Hace que traiga las props, y las asigna a product
    const { product } = props;
    return (
        <div>
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img
                  width="125px"
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                  <p>{product.artist}</p>
                </a>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                <div className="price">${product.price}</div>
              </div>
            </div>
        </div>
    )
}

export default Product
