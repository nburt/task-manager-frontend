import React, {Component, PropTypes} from 'react'
import NewTaskForm from '../components/NewTaskForm'
import TaskList from '../components/TaskList'

class TaskManager extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    }

    handleTaskSubmit(task) {
        this.props.actions.createTask(task.name, task.description, false);
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
