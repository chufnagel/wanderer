import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// can eventually add blog media, user avatar, etc.
const BlogList = props => {
  const BlogEntry = props.blogs.map(blog => (
    <Card key={blog.blogId}>
      <CardHeader title={blog.blogTitle} subheader={blog.blogAuthor} />
      <CardContent>
        <Typography paragraph>{blog.blogContents}</Typography>
      </CardContent>
    </Card>
  ));
  return <ul>{BlogEntry}</ul>;
};

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object)
};

BlogList.defaultProps = {
  blogs: [
    {
      blogId: 0,
      blogTitle: "Follow some blogs!",
      blogAuthor: "",
      blogContents: "Nothing here yet"
    }
  ]
};

export default BlogList;