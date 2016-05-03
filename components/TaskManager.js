import React, {Component, PropTypes} from 'react'
import NewTaskForm from '../components/NewTaskForm'
import TaskList from '../components/TaskList'

class TaskManager extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    }

    handleTaskSubmit(task) {
        $.post(this.props.url, {name: task.name, description: task.description}, function (task) {
            this.props.actions.addTask(task.id, task.name, task.description);
        }.bind(this));
    }

    render() {
        const {url, tasks, actions} = this.props;
        return (
            <div>
                <NewTaskForm url={url} handleTaskSubmit={this.handleTaskSubmit}/>
                <TaskList url={url} tasks={tasks} actions={actions}/>
            </div>
        )
    }
}

TaskManager.propTypes = {
    url: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default TaskManager
