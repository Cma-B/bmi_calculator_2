import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <form>
      <label>weight</label>
        <input
          id="weight"
          name="weight"
          placeholder="Kg"
        />
      <label>height</label>
        <input
          id="height"
          name="height"
          placeholder="cm"
        />
        <button id="calculate">Calculate BMI</button>
      </form>
    );
  }
}
export default App;