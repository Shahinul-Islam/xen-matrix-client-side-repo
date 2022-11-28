import React from "react";

const BookedProductTable = ({ bookedProduct }) => {
  const { modalProduct } = bookedProduct;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                src={modalProduct.thumb}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{modalProduct.name}</div>
            <div className="text-sm opacity-50">{modalProduct.location}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-lg font-bold">{modalProduct.name}</p>
        <br />
        <span className="badge badge-ghost badge-sm">
          {modalProduct.description}
        </span>
      </td>
      <td>{modalProduct.resalePrice}</td>
      <th>
        <button className="btn btn-primary">Pay Now</button>
      </th>
    </tr>
  );
};

export default BookedProductTable;
