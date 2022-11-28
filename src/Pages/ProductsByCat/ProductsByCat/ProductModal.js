import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ProductModal = ({ modalProduct, setModalProduct }) => {
  //   const { name, resalePrice } = product;
  //   console.log(handleModal, product);
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    // const productName = form.productName.value;
    // const productId = form.productId.value;
    const phone = form.phone.value;
    const meetLoaction = form.locationMeet.value;
    // console.log(email, name, productName, phone, meetLoaction);
    const booking = {
      name,
      email,
      phone,
      meetLoaction,
      modalProduct,
    };
    //send data to data base
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(modalProduct);
        // console.log(data);
        setModalProduct(null);
        toast.success("Product Booked Successfully!");
      });
    // console.log(booking);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking Confirmation</h3>
          <form onSubmit={handleSubmit}>
            <label className="label">
              <span className="label-text">User</span>
            </label>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input input-bordered input-secondary w-full max-w-xs my-2"
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              disabled
              name="email"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              value={modalProduct?.name}
              name="productName"
              disabled
              className="input input-bordered input-secondary w-full max-w-xs my-2"
            />

            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              value={modalProduct?.resalePrice}
              disabled
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              className="input input-bordered input-primary w-full max-w-xs my-2"
            />
            <label className="label">
              <span className="label-text">Meeting Location</span>
            </label>
            <input
              type="text"
              placeholder="Meeting location"
              name="locationMeet"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              htmlFor="my-modal"
              className="input-bordered input-primary btn-primary p-2 rounded mt-2"
            />
          </form>
          {/* <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={handleSubmit}>
              Confirm
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
