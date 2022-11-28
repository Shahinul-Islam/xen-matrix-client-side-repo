import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  let postTime = Date().split(" GMT")[0];

  //handle add product form

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const catName = form.catName.value;
    const thumb = form.thumbnail.value;
    const name = form.productName.value;
    const location = form.location.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const yearsOfUse = form.yearsOfUse.value;
    const postedTime = form.postedTime.value;
    const seller = form.seller.value;
    const verified = form.verified.value;
    const advertised = form.advertised.value;
    const available = form.available.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const purchaseYear = form.purchaseYear.value;
    const description = form.description.value;
    const newProduct = {
      catName,
      thumb,
      name,
      location,
      resalePrice,
      originalPrice,
      yearsOfUse,
      postedTime,
      seller,
      verified,
      advertised,
      available,
      condition,
      mobile,
      purchaseYear,
      description,
    };
    console.log(newProduct);
    fetch("https://xen-matrix-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/dashboard/my-products");
      });

    form.reset();
    toast.success("Product added!");
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Product name"
                  name="productName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="image link"
                  name="thumbnail"
                  className="input input-bordered"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-1">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="resale price"
                    name="resalePrice"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-1">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="original price"
                    name="originalPrice"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="years of use"
                    name="yearsOfUse"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={postTime}
                  disabled
                  name="postedTime"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  value={user.email}
                  disabled
                  name="seller"
                  className="input input-bordered"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-1">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="mobile"
                    name="mobile"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="purchase year"
                    name="purchaseYear"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  className="input input-bordered"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-1">
                <div className="form-control">
                  <select
                    className="select select-bordered w-full max-w-xs"
                    name="catName"
                  >
                    <option disabled selected>
                      Select Category
                    </option>
                    <option>Rolex</option>
                    <option>Casio</option>
                    <option>Apple</option>
                  </select>
                </div>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="verified"
                >
                  <option disabled selected>
                    Verified?
                  </option>
                  <option>true</option>
                  <option>false</option>
                </select>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="advertised"
                >
                  <option disabled selected>
                    Advertised?
                  </option>
                  <option>true</option>
                  <option>false</option>
                </select>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="available"
                >
                  <option disabled selected>
                    Available?
                  </option>
                  <option>true</option>
                  <option>false</option>
                </select>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="condition"
                >
                  <option disabled selected>
                    Condition
                  </option>
                  <option>fair</option>
                  <option>excellent</option>
                  <option>good</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
