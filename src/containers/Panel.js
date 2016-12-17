import React from 'react';

import Show from '../components/Show';
import Btn from '../components/Btn';

class Panel extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    increment = () => {
        let newState = {
            number: this.state.number + 1
        }

        this.setState(newState);
    }

    render() {
      return (
        <div>
          <Show num={this.state.number} />
          <Btn increment={this.increment} />
        </div>
      )
    }
}

export default Panel;