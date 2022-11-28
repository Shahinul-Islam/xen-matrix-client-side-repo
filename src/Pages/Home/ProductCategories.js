import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCategoriesCard from "./ProductCategoriesCard";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/categories";
    axios.get(url).then((res) => setCategories(res.data));
    /* fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data)); */
  }, []);
  return (
    <div>
      <h2 className="my-4 text-2xl text-center">Categories</h2>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 p-4">
        {categories &&
          categories.map((category) => (
            <ProductCategoriesCard
              key={category.id}
              category={category}
            ></ProductCategoriesCard>
          ))}
      </div>
    </div>
  );
};

export default ProductCategories;
