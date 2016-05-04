import * as types from '../constants/ActionTypes'
require('es6-promise').polyfill();
require('isomorphic-fetch');

function requestTaskCreate(id, name, description, completed) {
    return {
        type: types.REQUEST_CREATE_TASK, id, name, description, completed
    }
}

function receiveTaskCreate(json) {
    return {
        type: types.RECEIVE_CREATE_TASK,
        task: json
    }
}

export function createTask(name, description, completed) {
    var headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    var init = {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({name: name, description: description, completed: completed})
    };

    return dispatch => {
        dispatch(requestTaskCreate());
        return fetch('https://morning-hollows-57260.herokuapp.com/tasks', init)
            .then(response => response.json())
            .then(json => dispatch(receiveTaskCreate(json)))
    }
}

function requestTaskUpdate() {
    return {
        type: types.REQUEST_UPDATE_TASK
    }
}

function receiveTaskUpdate(json) {
    return {
        type: types.RECEIVE_UPDATE_TASK,
        task: json
    }
}

export function updateTask(id, name, description, completed) {
    var headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    var init = {
        method: 'PUT',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({name: name, description: description, completed: completed})
    };

    return dispatch => {
        dispatch(requestTaskUpdate());
        return fetch('https://morning-hollows-57260.herokuapp.com/tasks/' + id, init)
            .then(response => response.json())
            .then(json => dispatch(receiveTaskUpdate(json)))
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
