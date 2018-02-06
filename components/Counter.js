import react, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }
  handleIncrement() {
    const { dispatch } = this.props
    dispatch(Actions.increment())
  }
  handleDecrement() {
    const { dispatch } = this.props
    dispatch(Actions.decrement())
  }
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('why the state is undefined initially:', state)
  return {
    counter: state && state.counter || 0
  }
}

export default connect(mapStateToProps)(Counter)
