import React,{ Component }from 'react'
import {connect} from 'react-redux'
import Counter from './components/Counter'
import {incrementClick,decrementClick} from './action'

class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
    render() {
        return (
            <Counter
                onIncrement={this.props.incrementClick}
                onDecrement={this.props.decrementClick}
            />
        )
    }
}

const mapStateToProps = (state)=>({

});
const mapDispatchToProps = {
    incrementClick:incrementClick,
    decrementClick:decrementClick
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);