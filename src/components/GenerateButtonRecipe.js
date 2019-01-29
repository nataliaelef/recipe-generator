import React from 'react';

const GenerateRecipe = ({ changeState }) => {
  return (
    <button className="emptyButton" onClick={changeState}>
      Generate recipe
    </button>
  );
};

export default GenerateRecipe;
