import { createStore } from 'redux'

const window = window || global

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window == null) {
    return createStore(reducer, initialState)
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState)
    }
    return window.store
  }
}
