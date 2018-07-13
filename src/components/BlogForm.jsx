import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios"

class BlogForm extends Component {
  state = {
    open: false,
    title: "",
    contents: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // handleClose = () => {
  //   event.preventDefault();
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   }, () => console.log(state));
  // }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create new blog</DialogTitle>
          <DialogContent>
            <DialogContentText>{"Add a blog post"}</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="title"
              type="text"
              fullWidth
              onChange={(text) => {
                this.setState({
                  title: text.target.value
                })
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="content"
              type="text"
              fullWidth
              onChange={(text) => {
                this.setState({
                  contents: text.target.value
                })
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                axios.post("/blogs", {
                  title: this.state.title,
                  contents: this.state.contents,
                  userId: 1
                })
              }}
              color="primary"
            >
              {"Submit Blog"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BlogForm;
