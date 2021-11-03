import React from 'react';
import Recipie from './Recipie.js';

export default function RecipieList({ recipes }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipie key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary">Add Recipie</button>
      </div>
    </div>
  );
}
