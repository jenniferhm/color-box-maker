import React from "react";
import { shallow, mount} from "enzyme";
import toJson from "enzyme-to-json";
import NewBoxForm from './NewBoxForm';

it("renders without crashing", function() {
  shallow(<NewBoxForm />);
});

it("matches snapshot", function() {
  let wrapper = shallow(<NewBoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})

it("allows for change of new Box", function() {
  let wrapper = mount(<NewBoxForm />);
  const heightInput = wrapper.find("#height");
  heightInput.instance().value = "200px"
  heightInput.simulate("change");

  expect(wrapper.state().height).toEqual("200px");

  const widthInput = wrapper.find("#width");
  widthInput.instance().value = "200px"
  widthInput.simulate("change");

  expect(wrapper.state().width).toEqual("200px");

  const colorInput = wrapper.find("#color");
  colorInput.instance().value = "blue"
  colorInput.simulate("change");

  expect(wrapper.state().color).toEqual("blue");
});

it("runs a mocked addBox function on submit", function() {
  const submitFn = jest.fn();
  let wrapper = mount(<NewBoxForm addBox={submitFn} />);
  const form = wrapper.find("form");

  form.simulate("submit");

  expect(submitFn).toHaveBeenCalled();
});

it("resets state on submit", function() {
  const submitFn = jest.fn();
  let wrapper = mount(<NewBoxForm addBox={submitFn} />);

  const heightInput = wrapper.find("#height");
  heightInput.instance().value = "200px"
  heightInput.simulate("change");

  expect(wrapper.state().height).toEqual("200px");

  const form = wrapper.find("form");
  form.simulate("submit");

  expect(wrapper.state()).toEqual({
    height: "",
    width: "",
    color: ""
  });
});