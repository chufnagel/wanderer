import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

// This is roughly what we will use when we have some data in our DB.

// const FriendsList = props => (
//   <List>
//     {props.friends.map(friend => (
//       <ListItem key={friend.id} button>
//         <Link to="/profile">
//           {/* dynamically routed */}
//           <ListItemText primary={friend.name} />
//         </Link>
//       </ListItem>
//     ))};
//   </List>
// );

class FriendsList extends Component {
  componentDidMount() {
    // function for getting friends
  }

  render() {
    return (
      <List>
        {props.friends.map(friend => (
          <ListItem key={friend.id} button>
            <Link to={`/profile/${friend.id}`}>
              <ListItemText primary={friend.username} />
            </Link>
          </ListItem>
        ))};
      </List>
    );
  }
}

// Hard coded FriendsList (from before we had a DB set up)
// const FriendsList = () => (
//   <div>
//     <Typography variant="headline">
//       We didn't think you'd have friends, but here they are.
//     </Typography>
//     <div>
//       <center>
//         <Link to="/profile">
//           <ListItemText primary="Lina Luna Lei" />
//         </Link>
//       </center>
//     </div>
//   </div>
// );

export default FriendsList;
