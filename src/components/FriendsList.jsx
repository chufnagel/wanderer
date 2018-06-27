import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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

// In the meantime, let's hardcode it.
const FriendsList = () => (
  <div>
    <Typography variant="headline">
      We didn't think you'd have friends, but here they are.
    </Typography>
    <div>
      <center>
        <List>
          <ListItem button>
            <Link to="/profile">
              <ListItemText primary="Lina Luna Lei" />
            </Link>
          </ListItem>
        </List>
      </center>
    </div>
  </div>
);

export default FriendsList;
