import React, { useEffect, useState } from "react";
import AdvertisedCard from "./AdvertisedCard";

const AdertisedProducts = () => {
  const [advertisedProducts, setAdvertisedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);
  useEffect(() => {
    const url = "https://xen-matrix-server.vercel.app/advertise";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAdvertisedProducts(data);
      });
  }, []);
  return (
    <div className="my-4">
      {advertisedProducts && advertisedProducts.length > 0 ? (
        <>
          <h2 className="my-4 font-bold text-center text-2xl">
            Advertised Products
          </h2>
          {isLoading ? (
            <div className="flex justify-center">
              <progress className="progress progress-primary w-56"></progress>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-8">
                {advertisedProducts &&
                  advertisedProducts.map((advertisedProduct) => (
                    <AdvertisedCard
                      key={advertisedProduct._id}
                      advertisedProduct={advertisedProduct}
                    ></AdvertisedCard>
                  ))}
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdertisedProducts;
