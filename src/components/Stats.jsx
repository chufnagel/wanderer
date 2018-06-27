import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render () {
    return (
    <div>
      <div>You have visited [28] cities and [10] countries</div>
      <div>You want to visit [5] places.</div>
    </div>
    )
  }
}

export default Stats;