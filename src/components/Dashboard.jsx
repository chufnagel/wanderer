import React from 'react';
import Header from './Header.jsx'
import Stats from './Stats.jsx'
import Main from './Main.jsx'
import Timeline from './Timeline.jsx'

var Dashboard = (props) => (
  <div className="dashboard">
      <Header/>
      <Timeline/>
      <h4>Welcome [Koichi]</h4> 
      <Stats/>
      <Main/>
  </div>
);

/*VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};*/

export default Dashboard;
