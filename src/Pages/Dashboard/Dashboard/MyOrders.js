import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import BookedProductTable from "./BookedProductTable";

const MyOrders = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const [bookedProducts, setBookedProducts] = useState([]);
  const userNow = loggedUser[0];
  // console.log(userNow);
  useEffect(() => {
    const url = `https://xen-matrix-server.vercel.app/user?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  }, []);
  const { user } = useContext(AuthContext);
  // console.log(bookedProducts);

  useEffect(() => {
    const url = `https://xen-matrix-server.vercel.app/booked?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookedProducts(data));
  }, [user.email]);
  return (
    <div>
      {userNow && userNow?.role === "Buyer" ? (
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
                {bookedProducts.map((bookedProduct) => (
                  <BookedProductTable
                    key={bookedProduct._id}
                    bookedProduct={bookedProduct}
                  ></BookedProductTable>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <></>
      )}
      {userNow && userNow === "Seller" ? (
        <>
          <h2>This is seller products list</h2>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyOrders;
