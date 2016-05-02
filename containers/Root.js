import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import App from './App'

const store = configureStore({tasks: []});

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App dispatch={store.dispatch} />
            </Provider>
        )
    }
}
