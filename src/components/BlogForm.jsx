import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class BlogForm extends Component {
  state = {
    open: false,
    title: '',
    content: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

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
            <DialogContentText>
              {"Add a blog post"}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="title"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="content"
              type="text"
              fullWidth
              />
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} color="primary">
          Cancel
          </Button>
          <Button onClick={() => this.props.addBlog
            (this.state.title, this.state.contents)} color="primary">
              {"Submit Blog"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BlogForm;
