import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const FriendsList = ({ friends }) => (
  <List>
    {friends.map(friend => (
      <ListItem key={friend.id} button>
        <Link to={`/profile/${friend.id}`}>
          <ListItemText primary={friend.username} />
        </Link>
      </ListItem>
    ))};
  </List>
);

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
