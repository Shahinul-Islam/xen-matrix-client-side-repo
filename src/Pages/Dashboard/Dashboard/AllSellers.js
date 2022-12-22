import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SellerCard from "./SellerCard";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  useEffect(() => {
    fetch("https://xen-matrix-server.vercel.app/sellers")
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);
  //handle remove buyer
  const handleRemoveUser = (email) => {
    console.log("deleted user: ", email);
    fetch(`https://xen-matrix-server.vercel.app/users/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center my-2">
          <progress className="progress progress-primary w-56"></progress>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers &&
                sellers.map((seller) => (
                  <SellerCard
                    key={seller?._id}
                    seller={seller}
                    handleRemoveUser={handleRemoveUser}
                  ></SellerCard>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllSellers;
