import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 750,
    marginBottom: 12
  },
  pos: {
    marginBottom: 2
  }
};

// can eventually add blog media, user avatar, etc.
const BlogList = ({ blogs }) => {
  return blogs.blogs.map(blog => (
    <Card key={blog.blog_id} style={styles}>
      <CardHeader title={blog.title} />
      <CardContent>
        <Typography paragraph>{blog.content}</Typography>
      </CardContent>
    </Card>
  ));
};

const BlogList = ({ blogs, classes }) => {
  return (
    <div>
      <Typography variant="display2" gutterBottom>
        {"Blogs"}
      </Typography>
      {blogs.blogs.map(blog => (
        <Card className={classes.card} key={blog.blog_id}>
          <CardHeader title={blog.title} />
          <CardContent>
            {/* <Typography className={classes.pos}>{blog.timestamp}</Typography> */}
            <Typography paragraph>{blog.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// BlogList.defaultProps = {
//   blogs: [
//     {
//       blog_id: 0,
//       title: "Follow some blogs!",
//       blogAuthor: "",
//       content: "Nothing here yet"
//     }
//   ]
// };

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);
