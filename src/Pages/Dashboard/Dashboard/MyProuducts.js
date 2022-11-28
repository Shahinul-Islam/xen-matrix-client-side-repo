import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import MyProductsTable from "./MyProductsTable";

const MyProuducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    /* const url = `http://localhost:5000/products?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyProducts(data)); */
    getMyProducts();
  }, []);
  const getMyProducts = () => {
    const url = `http://localhost:5000/products?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  };
  //handle remove product
  const handleRemoveProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    getMyProducts();
    toast.success("Deleted Successfully");
  };

  //handle update advertise value
  const handleAdvertiseProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(id);
    toast.success("Advertised Set");
  };

  return (
    <div>
      <h2 className="text-center font-bold my-4 text-2xl">My Products</h2>
      <div>
        {myProducts ? (
          <>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {myProducts &&
                    myProducts.map((myProduct) => (
                      <MyProductsTable
                        key={myProduct._id}
                        myProduct={myProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        handleAdvertiseProduct={handleAdvertiseProduct}
                      ></MyProductsTable>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyProuducts;
