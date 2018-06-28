import React from 'react';
import lifecycle from 'react-pure-lifecycle'

const methods =  {
  componentDidMount(props) {
    props.setNavFlagToDashboard()
  }
}

const PhotoGrid = (props) => {
  return (
    <div>
      <h1> Photos </h1>
      {props.photos.map((photo) => {
        return (
            <img src={photo.imageUrl} className="post-image"/>
        )
      })}
    </div>
  )
}

export default lifecycle(methods)(PhotoGrid);

