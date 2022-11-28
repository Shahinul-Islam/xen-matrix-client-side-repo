import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      const url = `http://localhost:5000/jwt?email=${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
          // console.log(data);
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
