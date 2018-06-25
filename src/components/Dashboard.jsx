import React from 'react';
import Header from './Header.jsx'
import Stats from './Stats.jsx'
import Main from './Main.jsx'
import Timeline from './Timeline.jsx'

var Dashboard = (props) => {
  console.log('dashboard props', props) 
  return (
    <div className="dashboard">
      <Header/>
      <Timeline/>
      <h4>Welcome [Koichi]</h4>
      <button>Add Memory</button> 
      <Stats/>
      <Main travelData={props.travelData}/>
    </div>
  )
};

/*VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};*/

export default Dashboard;