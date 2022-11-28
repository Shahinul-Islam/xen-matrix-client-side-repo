import React, { useContext } from "react";
import toast from "react-hot-toast";
import { GoVerified } from "react-icons/go";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ProductModal from "./ProductModal";

const SingleProductCard = ({ product, setModalProduct }) => {
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  const userEmail = user.email;
  const {
    thumb,
    catName,
    condition,
    description,
    location,
    mobile,
    name,
    originalPrice,
    postedTime,
    purchaseYear,
    resalePrice,
    seller,
    verified,
    yearsOfUse,
  } = product;

  //handle modal
  const handleModal = (product) => {
    console.log(product._id);
  };
  /* 
  const handleSubmit = () => {
    toast.success("Product Booked Successfully!");
  }; */
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={thumb} alt="watch" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">{description}</p>
        <p className="font-semibold">Location: {location}</p>
        <div className="flex items-center justify-between font-semibold">
          <p>Resale price: {resalePrice}</p>
          <p>Original price: {originalPrice}</p>
        </div>
        <p className="font-semibold">Years of use: {yearsOfUse}</p>
        <p className="font-semibold">Posted: {postedTime}</p>
        <p className="flex items-center">
          <span className="text-lg font-semibold">Seller: {seller}</span>
          <span className="ml-2">
            {verified ? <GoVerified></GoVerified> : ""}
          </span>
        </p>
        <div className="card-actions justify-end">
          <label
            htmlFor="my-modal"
            className="btn btn-primary"
            onClick={() => setModalProduct(product)}
          >
            Book now
          </label>
        </div>
      </div>
      {/* <ProductModal handleModal={handleModal} product={product}></ProductModal> */}
      {/* modal goes here  */}

      {/* modal goes here  */}
    </div>
  );
};

export default SingleProductCard;
