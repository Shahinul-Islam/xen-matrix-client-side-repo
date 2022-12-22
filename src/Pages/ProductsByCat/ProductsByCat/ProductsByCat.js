import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductModal from "./ProductModal";
import SingleProductCard from "./SingleProductCard";

const ProductsByCat = ({ state }) => {
  const location = useLocation();
  const [modalProduct, setModalProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const { data: products = [] } = useQuery({
    queryKey: ["location"],
    queryFn: () =>
      fetch(`https://xen-matrix-server.vercel.app${location.pathname}`).then(
        (res) => res.json()
      ),
  });
  return (
    <div>
      <h2 className="text-2xl text-center my-3">
        All the products under category : {"" + location.pathname.split("/")[2]}
      </h2>
      {isLoading ? (
        <div className="flex justify-center my-2">
          <progress className="progress progress-primary w-56"></progress>
        </div>
      ) : (
        <div className="p-10 my-10 grid lg:grid-cols-3 gap-3">
          {products &&
            products.map((product) => (
              <SingleProductCard
                key={product.id}
                product={product}
                setModalProduct={setModalProduct}
              ></SingleProductCard>
            ))}
        </div>
      )}

      {modalProduct && (
        <ProductModal
          modalProduct={modalProduct}
          setModalProduct={setModalProduct}
        ></ProductModal>
      )}
    </div>
  );
};

export default ProductsByCat;
