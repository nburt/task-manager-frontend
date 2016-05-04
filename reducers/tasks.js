import {RECEIVE_CREATE_TASK, RECEIVE_TASKS, RECEIVE_UPDATE_TASK} from '../constants/ActionTypes'

export default function tasks(state = {tasks: []}, action) {
    switch (action.type) {
        case RECEIVE_CREATE_TASK:
            return {
                tasks: [
                    ...state.tasks,
                    {
                        id: action.task.id,
                        name: action.task.name,
                        description: action.task.description,
                        completed: action.task.completed
                    }
                ]
            };
        case RECEIVE_TASKS:
            return Object.assign({}, state, {tasks: action.tasks});
        case RECEIVE_UPDATE_TASK:
            return {
                tasks: state.tasks.map(task => {
                        if (task.id === action.task.id) {
                            return Object.assign({}, task, {
                                id: action.task.id,
                                name: action.task.name,
                                description: action.task.description,
                                completed: action.task.completed
                            })
                        } else {
                            return task
                        }
                    }
                )

            };
        default:
            return state
    }
}
