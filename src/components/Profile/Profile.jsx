import React from "react";
import lifecycle from 'react-pure-lifecycle'
import PhotoGrid from "../PhotoGrid.jsx"
import BlogList from "../BlogList/BlogList.jsx"

const methods =  {
  componentDidMount(props) {
    props.setNavFlagToDashboard()
  }
}

const Profile = (props) => {
  return (
    <div>
      <img src={"https://pbs.twimg.com/profile_images/585086002466795521/HgNCKU0D_400x400.jpg"} width="33%"/>
      <ul className="profile-image" width="15%" fontSize="150%">25&#x2714;<br/>5&#10084;</ul>
      <ul width="52%"><BlogList setNavFlagToDashboard={props.setNavFlagToDashboard} blogs={props.blogs}/></ul>
      <ul width="35%"></ul>
      <span><PhotoGrid photos={props.photos} setNavFlagToDashboard={props.setNavFlagToDashboard}/></span>
    </div>
  )
};

export default lifecycle(methods)(Profile);
