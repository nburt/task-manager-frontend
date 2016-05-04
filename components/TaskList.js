import React, { Component, PropTypes } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
    }

    handleTaskUpdate(task) {
        this.props.actions.updateTask(task.id, task.name, task.description, task.completed);
    }

    render() {
        const { tasks } = this.props;
        return (
            <ul className="columns">
                {tasks.map(task =>
                    <TaskItem key={task.id} task={task} handleTaskUpdate={this.handleTaskUpdate}/>
                )}
            </ul>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList
