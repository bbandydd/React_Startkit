import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './containers/Panel';

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
