import React, { Component, PropTypes } from 'react'

class TaskItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleCompletedChange() {
        let task = this.props.task;
        this.props.actions.updateTask(task.id, task.name, task.description, !task.completed);
    }

    handleDeleteTask() {
        this.props.actions.deleteTask(this.props.task.id)
    }

    render() {
        const { task } = this.props;
        return (
            <li className="column full">
                <input id={"task-completed-" + (task.id)} type="checkbox" checked={task.completed} onChange={this.handleCompletedChange}/>
                <label className={(task.completed ? " line-through" : "")} htmlFor={"task-completed-" + (task.id)}>
                    {task.name}
                    <i className="fa fa-times delete-task" aria-hidden="true" onClick={this.handleDeleteTask}></i>
                </label>
                <p className={(task.completed ? "line-through" : "")}>{task.description}</p>
            </li>

        )
    }
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskItem
