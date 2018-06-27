/* global expect, test */
import React from "react";
import BlogList from "../../components/BlogList/BlogList";

const testBlogs = [
  {
    blogId: "1",
    blogTitle: "WELCOME TO NIHON",
    blogAuthor: "BROICHI",
    blogContents: "YOLO SWAG"
  }
];
test("BlogList renders without crashing", () => {
  const component = shallow(<BlogList />);
  expect(component.exists()).toEqual(true);
});
test("BlogList renders a blog post", () => {
  const wrapper = shallow(
    <BlogList blogs={testBlogs} />
  );
  expect(wrapper).toMatchSnapshot();
});
