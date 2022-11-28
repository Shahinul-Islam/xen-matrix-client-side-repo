import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const userNow = loggedUser[0];
  useEffect(() => {
    const url = `https://xen-matrix-server.vercel.app/user?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  }, []);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-center my-4 font-bold text-2xl">
        You are logged in as : {userNow?.role}
      </h2>
    </div>
  );
};

export default Dashboard;
