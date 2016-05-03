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
            <tr className="columns">
                <td className="column fourth"><input type="checkbox" checked={task.completed} onChange={this.handleCompletedChange}/></td>
                <td className={"column fourth" + (task.completed ? " line-through" : "")}>{task.name}</td>
                <td className={"column fourth" + (task.completed ? " line-through" : "")}>{task.description}</td>
            </tr>
        )
    }
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
};

export default TaskItem
