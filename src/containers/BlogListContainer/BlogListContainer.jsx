import React, { Component } from 'react';

import BlogList from '../../components/BlogList/BlogList';


class BlogListContainer extends Component {
  constructor() {
    super();
    this.state = { blogs: [] };
  }
  componentDidMount() {
    fetch("/blogs.json")
      .then(res => res.json())
      .then(blogs => this.setState({ blogs }));
  }

  render() {
    return <BlogList blogs={this.state.blogs} />;
  }
}

export default BlogListContainer;
