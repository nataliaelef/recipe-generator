import React from 'react';
import IngredientInput from './components/IngredientInput';
import Recipe from './components/Recipe';
import GenerateRecipe from './components/GenerateButtonRecipe';
import IngredientList from './components/IngredientList';
import ResetButton from './components/ResetButton';

class App extends React.Component {
  state = {
    ingredients: [],
    showRecipe: false
  };
  render() {
    return (
      <div className="App">
        <h1>Recipe Generator</h1>
        <IngredientInput addIngredient={this.addIngredient} />
        <IngredientList
          ingredients={this.state.ingredients}
          removeIngredient={this.removeIngredient}
        />
        <GenerateRecipe changeState={this.changeState} />{' '}
        <Recipe
          ingredients={this.state.ingredients}
          showRecipe={this.state.showRecipe}
        />
        <ResetButton resetState={this.resetState} />
      </div>
    );
  }

  addIngredient = newIngredient => {
    this.setState(prevState => {
      return {
        ingredients: [...prevState.ingredients, newIngredient]
      };
    });
  };

  removeIngredient = ingredientToRemove => {
    this.setState(prevState => {
      return {
        ingredients: prevState.ingredients.filter(
          ingredient => ingredient !== ingredientToRemove
        )
      };
    });
  };

  changeState = () => this.setState({ showRecipe: true });

  resetState = () => this.setState({ ingredients: [], showRecipe: false });
}

export default App;
