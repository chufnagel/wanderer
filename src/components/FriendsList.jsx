import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { withStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const FriendsList = ({ friends }) => (
  <div>
    <Typography variant="headline">
      You don't have many friends, but here they are.
    </Typography>
    {friends.map(friend => (
    <div>
      <Link to={`/profile/${friend.id}`}>
        <center>
          <ListItemText primary={friend.username} />
        </center>
      </Link>
      </div>
    ))}
  </div>
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
