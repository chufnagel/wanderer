import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Blog = ({ blog }) => {
  return (
    <Card key={blog.key}>
      <CardHeader title={blog.title} subheader={blog.author} />
      <CardContent>
        <Typography paragraph>{blog.contents}</Typography>
      </CardContent>
    </Card>
  );
};

Blog.propTypes = {
  blog: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Blog;
