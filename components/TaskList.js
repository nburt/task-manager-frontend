import React, { Component, PropTypes } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { tasks, actions } = this.props;
        return (
            <ul className="columns">
                {tasks.map(task =>
                    <TaskItem key={task.id} task={task} actions={actions}/>
                )}
            </ul>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList
