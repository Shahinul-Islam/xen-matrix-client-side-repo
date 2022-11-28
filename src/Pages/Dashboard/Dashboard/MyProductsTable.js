import React from "react";

const MyProductsTable = ({
  myProduct,
  handleRemoveProduct,
  handleAdvertiseProduct,
}) => {
  console.log(myProduct);
  //handle remove product
  /* const handleRemoveProduct = (id) => {
    console.log("product clicked: ", id);
  }; */
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={myProduct.thumb} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{myProduct.name}</div>
            <div className="text-sm opacity-50">{myProduct.location}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-lg font-bold">{myProduct.name}</p>
        <br />
        <span className="badge badge-ghost badge-sm">
          {myProduct.description}
        </span>
      </td>
      <td>{myProduct.resalePrice}</td>
      <th className="flex items-center gap-1">
        {myProduct && myProduct.available ? (
          <>
            <button className="btn btn-xs btn-success">Available</button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleAdvertiseProduct(myProduct._id)}
            >
              Advertise
            </button>
          </>
        ) : (
          <></>
        )}

        <button
          className="btn btn-sm btn-error"
          onClick={() => handleRemoveProduct(myProduct._id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyProductsTable;
