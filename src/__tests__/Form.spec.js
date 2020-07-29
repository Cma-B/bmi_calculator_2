import React from "react";
import { shallow } from "enzyme";
import Form from "../components/Form";

describe("Form", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const wrapper = shallow(
    <Form
      weight="65"
      height="165"
      onChangeHandler={handleChange}
      onSubmitHandler={handleSubmit}
    />
  );
  it("renders with weight prop", () => {
    expect(wrapper.find("#weight").props().value).toEqual("65");
  });
  it("renders with height prop", () => {
    expect(wrapper.find("#height").props().value).toEqual("165");
  });

  it("on change the onChageHandler is being called", () => {
    wrapper.find("#weight").simulate("change");
    expect(handleChange).toHaveBeenCalled();
    wrapper.find("#height").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("on submit the onSubmitHandler is being called", () => {
    wrapper.find("form").simulate("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });
})