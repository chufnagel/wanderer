import React from "react";

const BlogList = blogs => (
  <ul>
    {blogs.map(({ id, title, author }) => (
      <li key={id}>
        {title}-{author}
      </li>
    ))}
  </ul>
);

export default BlogList;
