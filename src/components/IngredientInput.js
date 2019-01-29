import React from 'react';

class IngredientInput extends React.Component {
  state = { newIngredient: '' };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add an ingredient"
          onChange={this.handleChange}
          value={this.state.newIngredient}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleChange = event => {
    const addedIngredient = event.target.value;
    this.setState({ newIngredient: addedIngredient });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addIngredient(this.state.newIngredient);
    this.setState({ newIngredient: '' });
  };
}

export default IngredientInput;
