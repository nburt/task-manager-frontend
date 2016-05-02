import * as types from '../constants/ActionTypes'
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function addTask(id, name, description) {
    return {
        type: types.ADD_TASK, id, name, description
    }
}

function requestTasks() {
    return {
        type: types.REQUEST_TASKS
    }
}

function receiveTasks(json) {
    return {
        type: types.RECEIVE_TASKS,
        tasks: json
    }
}

export function fetchTasks() {
    return dispatch => {
        dispatch(requestTasks());
        return fetch(`https://morning-hollows-57260.herokuapp.com/tasks`)
            .then(response => response.json())
            .then(json => dispatch(receiveTasks(json)))
    }
}
