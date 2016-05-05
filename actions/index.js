import * as types from '../constants/ActionTypes'
require('es6-promise').polyfill();
require('isomorphic-fetch');
const baseApiUrl = 'https://morning-hollows-57260.herokuapp.com';

function requestTaskCreate(id, name, description, completed) {
    return {
        type: types.REQUEST_TASK_CREATE, id, name, description, completed
    }
}

function receiveTaskCreate(json) {
    return {
        type: types.RECEIVE_TASK_CREATE,
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
        return fetch(baseApiUrl + '/tasks', init)
            .then(response => response.json())
            .then(json => dispatch(receiveTaskCreate(json)))
    }
}

function requestTaskUpdate() {
    return {
        type: types.REQUEST_TASK_UPDATE
    }
}

function receiveTaskUpdate(json) {
    return {
        type: types.RECEIVE_TASK_UPDATE,
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
        return fetch(baseApiUrl + '/tasks/' + id, init)
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
        return fetch(baseApiUrl + '/tasks')
            .then(response => response.json())
            .then(json => dispatch(receiveTasks(json)))
    }
}

function requestTaskDelete() {
    return {
        type: types.REQUEST_TASK_DELETE
    }
}

function receiveTaskDelete(id) {
    return {
        type: types.RECEIVE_TASK_DELETE, id
    }
}

export function deleteTask(id) {
    var headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    var init = {
        method: 'DELETE',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };

    return dispatch => {
        dispatch(requestTaskDelete());
        return fetch(baseApiUrl + '/tasks/' + id, init)
            .then(dispatch(receiveTaskDelete(id)))
    }
}
