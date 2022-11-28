import React from "react";

const BuyerCard = ({ buyer, handleRemoveUser }) => {
  return (
    <tr>
      <td>{buyer.name}</td>
      <td>{buyer.email}</td>
      <td>
        <button
          className="btn btn-sm btn-error"
          onClick={() => handleRemoveUser(buyer.email)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BuyerCard;
