import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState([]);
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
  /* 
  useEffect(() => {
    const url = `https://xen-matrix-server.vercel.app/booked?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookedProducts(data));
  }, []); */
  return (
    <div>
      <h2 className="text-center my-4 font-bold text-2xl">
        You are logged in as : {userNow?.role}
      </h2>
      {/* <div>
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
                  {bookedProducts &&
                    bookedProducts.map((bookedProduct) => (
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
      </div> */}
    </div>
  );
};

export default Dashboard;
