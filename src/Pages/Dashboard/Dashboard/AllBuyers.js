import React, { useEffect, useState } from "react";
import BuyerCard from "./BuyerCard";

const AllBuyers = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetch("https://xen-matrix-server.vercel.app/buyers")
      .then((res) => res.json())
      .then((data) => setBuyers(data));
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
              {buyers &&
                buyers.map((buyer) => (
                  <BuyerCard
                    key={buyer?._id}
                    buyer={buyer}
                    handleRemoveUser={handleRemoveUser}
                  ></BuyerCard>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBuyers;
