import React from "react";

const SearchBar = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Phones">Phones</option>
        <option value="Laptops">Laptops</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
};

export default SearchBar;