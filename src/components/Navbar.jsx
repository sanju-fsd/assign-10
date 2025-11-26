import React from "react";

export default function Navbar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  sortOption,
  setSortOption
}) {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Home">Home</option>
        <option value="Clothing">Clothing</option>
        <option value="Outdoors">Outdoors</option>
      </select>

      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priceLowToHigh">Price: Low → High</option>
        <option value="priceHighToLow">Price: High → Low</option>
        <option value="ratingHighToLow">Rating: High → Low</option>
      </select>
    </div>
  );
}
