import React, { useState } from 'react';
import './FilterProducts.css';

const FilterProducts = ({ categories, filterProducts }) => {
  const [categoryState, setCategoryState] = useState({
    activeObject: 'all',
    objects: categories,
  });

  function toggleActive(index) {
    setCategoryState({
      ...categoryState,
      activeObject: categoryState.objects[index],
    });
  }

  function toggleActiveStyles(index) {
    if (categoryState.objects[index] === categoryState.activeObject) {
      return 'category-active';
    } else {
      return '';
    }
  }

  return (
    <div className="filter-container">
      <h4>Filter</h4>
      <div className="categories-container">
        <p className="filter-title">Categories</p>
        {categoryState.objects.map((category, categoryIndex) => {
          return (
            <button
              className={`category-btn ${toggleActiveStyles(categoryIndex)}`}
              key={categoryIndex}
              onClick={() => {
                filterProducts(category);
                toggleActive(categoryIndex);
              }}
            >
              <div className="category-box"></div>
              <p>{category}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterProducts;
