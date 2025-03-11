import React from 'react';

const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories">
      <h5>Categories</h5>
      <ul className="list-unstyled">
        {categories.map((category) => (
          <li key={category} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
