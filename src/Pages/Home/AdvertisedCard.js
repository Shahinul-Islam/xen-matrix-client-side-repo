import React from "react";

const AdvertisedCard = ({ advertisedProduct }) => {
  const { thumb, catName, name, description } = advertisedProduct;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={thumb} alt="watch" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between items-center ">
          <button className="btn btn-sm btn-primary">Buy Now</button>
          <div>
            <div className="badge badge-outline mr-2">Watch</div>
            <div className="badge badge-outline">{catName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
