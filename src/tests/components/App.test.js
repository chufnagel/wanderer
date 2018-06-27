/* global expect, test */
import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";

test("App renders without crashing", () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
test("App matches snapshot", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
