import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CreateIcon from "@material-ui/icons/Create";
import Blogs from "./WrappedContainers";
import PhotoUploaderContainer from "../containers/PhotoUploaderContainer";

const recentBlogs = "Recent blogs";
const recentPhotos = "Recent photos";

const linkStyles = {
  textDecoration: "none"
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploaderActive: false,
      blogFormActive: false
    };

    this.toggleUploader = this.toggleUploader.bind(this);
  }

  toggleUploader(e) {
    e.preventDefault();
    this.setState({
      uploaderActive: !this.state.uploaderActive
    });
  }

  toggleForm(e) {
    this.setState({
      blogFormActive: !this.state.blogFormActive
    });
  }

  render() {
    const { userInfo } = this.props;
    const { uploaderActive, blogFormActive } = this.state;

    return (
      <div style={{ marginLeft: "130px", textAlign: "center" }}>
        <Typography variant="display1">
          Welcome, <strong>{userInfo.name}</strong>!
        </Typography>
        <Button
          variant="contained"
          name="uploaderActive"
          value={uploaderActive}
          color="secondary"
          style={linkStyles}
          onClick={this.toggleUploader}
        >
          upload
          <PhotoCameraIcon />
        </Button>
        <Button
          variant="contained"
          name="blogFormActive"
          value={blogFormActive}
          color="primary"
          onClick={this.toggleForm}
        >
          write
          <CreateIcon />
        </Button>
        <span />
        <br />
        {uploaderActive === true ? <PhotoUploaderContainer /> : null}
        <br />
        {blogFormActive === true ? (
          <span>This is where the blog form will go when it is ready</span>
        ) : (
          <span>
            This is where the blog form will go when blogFormActive is true
          </span>
        )}
        <Typography variant="headline">{recentBlogs}</Typography>
        {/* <Blogs /> */}
        <Typography variant="headline">{recentPhotos}</Typography>
        <br />
      </div>
    );
  }
}

Home.propTypes = {
  userInfo: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
  // visitedDestinations: PropTypes.arrayOf(PropTypes.object).isRequired,
  // faveDestinations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
