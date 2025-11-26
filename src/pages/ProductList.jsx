import React, { useState } from "react";
import Navbar from "../components/Navbar";   
import { ProductGrid } from "../components/ProductCard";
import products from "../data/products";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("none");

  // filtering logic
  let filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "All" || product.category === category)
  );

  // sorting logic
  if (sortOption === "priceLowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "ratingHighToLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
