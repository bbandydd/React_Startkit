import React from 'react';

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

export default Show;