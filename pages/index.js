import react, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers'
import { initStore } from '../store'
import Layout from '../layouts/layout'
import Counter from '../components/Counter'

export default class Index extends Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    // const store = createStore(reducer)
    const store = initStore(reducer, { counter: 0 }, isServer)
    return {
      isServer,
      initialState: store.getState()
    }
  }
  constructor(props) {
    super(props)
    // this.store = createStore(reducer, props.initialState)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }
  componentDidMount() {
    console.log('did mount')
  }
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Counter />
        </Layout>
      </Provider>
    )
  }
}
