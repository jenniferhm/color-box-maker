import React from "react";
import { shallow, mount} from "enzyme";
import toJson from "enzyme-to-json";
import BoxList from './BoxList';

it("renders without crashing", function() {
  shallow(<BoxList />);
});

it("matches snapshot", function() {
  let wrapper = shallow(<BoxList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("renders a list of boxes", function() {
  let wrapper = mount(<BoxList />);

  wrapper.setState({boxes: [
    {id: 1, height: "200px", width: "200px", color: "blue", removeBox: wrapper.state.removeBox },
    {id: 2, height: "200px", width: "200px", color: "green", removeBox: wrapper.state.removeBox },
    {id: 3, height: "200px", width: "200px", color: "yellow", removeBox: wrapper.state.removeBox }
  ]});

  expect(wrapper.state().boxes.length).toEqual(3);
  expect(wrapper.state()).toEqual({boxes: [
    {id: 1, height: "200px", width: "200px", color: "blue", removeBox: wrapper.state.removeBox },
    {id: 2, height: "200px", width: "200px", color: "green", removeBox: wrapper.state.removeBox },
    {id: 3, height: "200px", width: "200px", color: "yellow", removeBox: wrapper.state.removeBox }
  ]});
  expect(wrapper.find("div").last().text()).toEqual("X");
});

it("removeBox function should remove a Box", function() {
  let wrapper = mount(<BoxList />);

  wrapper.setState({boxes: [
    {id: 1, height: "200px", width: "200px", color: "blue", removeBox: wrapper.state.removeBox },
    {id: 2, height: "200px", width: "200px", color: "green", removeBox: wrapper.state.removeBox },
    {id: 3, height: "200px", width: "200px", color: "yellow", removeBox: wrapper.state.removeBox }
  ]});

  wrapper.instance().removeBox(2);

  expect(wrapper.state().boxes.length).toEqual(2);
});

it("addBox function should add a Box", function() {
  let wrapper = mount(<BoxList />);

  wrapper.setState({boxes: [
    {id: 1, height: "200px", width: "200px", color: "blue", removeBox: wrapper.state.removeBox },
    {id: 2, height: "200px", width: "200px", color: "green", removeBox: wrapper.state.removeBox }
  ]});

  wrapper.instance().addBox({id: 3, height: "200px", width: "200px", color: "yellow", removeBox: wrapper.state.removeBox });

  expect(wrapper.state().boxes.length).toEqual(3);
  expect(wrapper.state().boxes[2].id).toEqual(expect.any(String));
});