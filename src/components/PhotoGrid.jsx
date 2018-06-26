import React from 'react';

const PhotoGrid = (props) => {
  console.log('photogrid', props)
  return (
    <div>
      <h4> Photos </h4>
      {props.travelData.map((photo) => {
        return ( 
            <img src={photo.imageUrl} className="post-image"/>
        )
      })}
    </div>
  )
}

export default PhotoGrid;

