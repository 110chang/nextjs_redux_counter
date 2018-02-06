import * as Actions from '../actions'

const initState = {
  counter: 0
}

export default (state=initState, action) => {
  switch (action.type) {
    case Actions.COUNTER_INCREMENT:
      return {...state,
        counter: state.counter + 1
      }
    case Actions.COUNTER_DECREMENT:
      return {...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}
