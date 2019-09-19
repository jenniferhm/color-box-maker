import React from "react";
import { shallow } from "enzyme";
import Box from './Box';


describe('<Box /> rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Box height="200px" width="200px" color="blue" />);
  });

  describe('blue box', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});