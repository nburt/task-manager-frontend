import React, { Component, PropTypes } from 'react'

class TaskItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleCompletedChange = this.handleCompletedChange.bind(this);
    }

    handleCompletedChange() {
        let task = this.props.task;
        this.props.handleTaskUpdate({id: task.id, name: task.name, description: task.description, completed: !task.completed});
    };

    render() {
        const { task } = this.props;
        return (
            <li className="column full">
                <input id={"task-completed-" + (task.id)} type="checkbox" checked={task.completed} onChange={this.handleCompletedChange}/>
                <label className={(task.completed ? " line-through" : "")} htmlFor={"task-completed-" + (task.id)}>
                    {task.name}
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
