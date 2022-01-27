import React from 'react';
import './FilterProducts.css';

const FilterProducts = ({ categories, filterProducts }) => {
  return (
    <div className="filter-container">
      <h4>Filter</h4>
      <div className="categories-container">
        <p className="filter-title">Categories</p>
        {categories.map((category, index) => {
          return (
            <button
              className="category-btn"
              key={index}
              onClick={() => filterProducts(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterProducts;
