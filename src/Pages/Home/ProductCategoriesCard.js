import React from "react";
import { Link } from "react-router-dom";

const ProductCategoriesCard = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="card my-2 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="product category" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Category: {name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/categories/${name}`}>
            <button className="btn btn-primary">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoriesCard;
