import {RECEIVE_TASK_CREATE, RECEIVE_TASKS, RECEIVE_TASK_UPDATE, RECEIVE_TASK_DELETE} from '../constants/ActionTypes'

export default function tasks(state = {tasks: []}, action) {
    switch (action.type) {
        case RECEIVE_TASK_CREATE:
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
        case RECEIVE_TASK_UPDATE:
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
        case RECEIVE_TASK_DELETE:
            return {
                tasks: state.tasks.filter(task =>
                    task.id !== action.id
                )
            };
        default:
            return state
    }
}
