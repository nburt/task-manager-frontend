import {ADD_TASK, RECEIVE_TASKS, REQUEST_TASKS} from '../constants/ActionTypes'

export default function tasks(state = {tasks: []}, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [
                    ...state.tasks,
                    {
                        id: action.id,
                        name: action.name,
                        description: action.description
                    }
                ]
            };
        case RECEIVE_TASKS:
            return Object.assign({}, state, {tasks: action.tasks});
        case REQUEST_TASKS:
            return Object.assign({}, state, {tasks: []});
        default:
            return state
    }
}
