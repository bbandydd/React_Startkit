import React from 'react';
import ReactDOM from 'react-dom';

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

class Show extends React.Component {
    render() {
      const { num } = this.props;

      return (
        <div>
          { num }
        </div>
      )
    }
}

class Btn extends React.Component {
    render() {
      const { increment } = this.props;

      return (
        <div>
          <button onClick={increment}> + </button>
        </div>
      )
    }
} 

ReactDOM.render(
  <Panel />
  , document.getElementById('app'));
