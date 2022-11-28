import React from "react";

const SellerCard = ({ seller, handleRemoveUser }) => {
  return (
    <tr>
      <td>{seller.name}</td>
      <td>{seller.email}</td>
      <td>
        <button
          className="btn btn-sm btn-error"
          onClick={() => handleRemoveUser(seller.email)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SellerCard;
