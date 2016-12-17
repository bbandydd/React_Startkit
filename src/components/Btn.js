import React from 'react';

class Btn extends React.Component {
    render() {
      const { increment, decrement } = this.props;

      return (
        <div>
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
        </div>
      )
    }
} 

export default Btn;