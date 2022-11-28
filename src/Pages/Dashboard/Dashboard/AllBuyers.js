import React, { useEffect, useState } from "react";
import BuyerCard from "./BuyerCard";

const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/buyers")
      .then((res) => res.json())
      .then((data) => setBuyers(data));
  }, []);

  //handle remove buyer
  const handleRemoveUser = (email) => {
    console.log("deleted user: ", email);
    fetch(`http://localhost:5000/users/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
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
    </div>
  );
};

export default AllBuyers;
