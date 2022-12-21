import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCategoriesCard from "./ProductCategoriesCard";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  useEffect(() => {
    const url = "https://xen-matrix-server.vercel.app/categories";
    axios.get(url).then((res) => setCategories(res.data));
  }, []);
  return (
    <div>
      <h2 className="my-4 font-bold text-2xl text-center">Categories</h2>
      {isLoading ? (
        <>
          <progress className="progress progress-primary w-56"></progress>
        </>
      ) : (
        <>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 p-4">
            {categories &&
              categories.map((category) => (
                <ProductCategoriesCard
                  key={category.id}
                  category={category}
                ></ProductCategoriesCard>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCategories;
