import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../redux/productApi";
import { addToCart } from '../redux/cartSlice';

const Home = () => {
    const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { data, error } = useGetAllProductsQuery();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>Products</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} style={{width:120}}/>
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
}

export default Home