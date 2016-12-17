import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as counterAction from '../actions/counterAction';

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

        const { counterReducer, counterAction } = this.props;

        return (
            <div>
            <Show num={this.state.number} />
            <Btn increment={this.increment} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counterReducer: state.counterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);