/* global expect, describe, test, beforeEach */
import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";
import Sidebar from "../../components/Sidebar/Sidebar";
import GlobalMap from "../../components/GlobalMap/GlobalMap";
import Header from "../../components/Header";
// import Main from "../../components/Main";

// // keep snapshot commented during App development
// test("App matches snapshot", () => {
//   const component = shallow(<App />);
//   expect(component).toMatchSnapshot();
// });

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("App renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test("Should render the GlobalMap component", () => {
    expect(wrapper.containsMatchingElement(<GlobalMap />)).toEqual(true);
  });
  test("Should render the Sidebar component", () => {
    expect(wrapper.containsMatchingElement(<Sidebar />)).toEqual(true);
  });
  test("It should render a Header component", () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
