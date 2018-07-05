import React from "react";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";

// The Header creates links that can be used to navigate
// between routes.

const Header = () => {
  return (
    <header>
      <center>
        <nav>
          <Link to="/">
            <ListItemText primary="home" />
          </Link>
          <Link to="/attractions">
            <ListItemText primary="attractions" />
          </Link>
          <Link to="/blogs">
            <ListItemText primary="blog posts" />
          </Link>
          <Link to="/photos_videos">
            <ListItemText primary="photos & videos" />
          </Link>
          <Link to="/destinations">
            <ListItemText primary="destinations" />
          </Link>
        </nav>
      </center>
    </header>
  );
};

//   if (props.navFlag === "dashboard") {
//     return (
//       <header>
//         <center>
//           <nav>
//             <Link to="/">
//               <ListItemText primary="home" />
//             </Link>
//             <Link to="/blogs">
//               <ListItemText primary="blog posts" />
//             </Link>
//             <Link to="/photos_videos">
//               <ListItemText primary="photos & videos" />
//             </Link>
//             <Link to="/destinations">
//               <ListItemText primary="destinations" />
//             </Link>
//           </nav>
//         </center>
//       </header>
//     );
//   }

//   if (props.navFlag === "countryOrCity") {
//     return (
//       <header>
//         <center>
//           <nav>
//             <Link to="/">
//               <ListItemText primary="information" />
//             </Link>
//             <Link to="/attractions">
//               <ListItemText primary="attractions" />
//             </Link>
//             <Link to="/blogs">
//               <ListItemText primary="blog posts" />
//             </Link>
//             <Link to="/photos_videos">
//               <ListItemText primary="photos & videos" />
//             </Link>
//           </nav>
//         </center>
//       </header>
//     );
//   }
// };

export default Header;
