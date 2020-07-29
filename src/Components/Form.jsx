import React from 'react';

const Form = props => {
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
};

export default Form;