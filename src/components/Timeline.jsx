import React from 'react';

import HorizontalTimeline from 'react-horizontal-timeline';

class Timeline extends React.Component {
    constructor(props) {
    super(props);
    state = {
        value : '01-01-1990',
        previous: 0
    };

  }

    render(){
      return(
         <div>
             <HorizontalTimeline
                values={this.state.values}
                indexClick={(index) => {
                    this.setState({value: index, previous: this.state.value});
                }}
             />
             <div className='text-center'>
                {this.state.value}
             </div>
          </div>
      )
    }
}

export default Timeline;
