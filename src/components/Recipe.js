import React from 'react';

const Recipe = ({ ingredients, showRecipe }) => {
  const instructions = ['boil', 'steam', 'fry', 'mash', 'reduce', 'stir'];
  return (
    <div>
      {showRecipe && (
        <>
          <h3>Here is your Recipe</h3>
          <ol>
            {ingredients.map(ingredient => (
              <li>
                {
                  instructions[
                    Math.round(Math.random() * (instructions.length - 1))
                  ]
                }{' '}
                the {ingredient}
              </li>
            ))}
            <li>Mix all the ingredients together and you are good to go</li>
            <p>Enjoy!</p>
          </ol>
        </>
      )}
    </div>
  );
};

export default Recipe;
