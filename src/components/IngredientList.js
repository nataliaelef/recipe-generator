import React from 'react';
//import PropTypes from 'prop-types';

const IngredientList = ({ ingredients, removeIngredient }) => {
  return (
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient}>
          {ingredient}{' '}
          <button onClick={() => removeIngredient(ingredient)}>x</button>
        </li>
      ))}
    </ul>
  );
};

// IngredientList.propTypes = {
//   ingredients: PropTypes.array,
//   removeIngredient: PropTypes.func
// };

export default IngredientList;
