import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasks from '../reducers/tasks'

export default function configureStore(initialState) {
    return createStore(
        tasks,
        initialState,
        applyMiddleware(
            thunkMiddleware
        )
    )
}
