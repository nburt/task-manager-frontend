var TaskManager = React.createClass({
    getInitialState: function () {
        return {
            tasks: []
        }
    },

    componentDidMount: function () {
        $.get(this.props.url, function (tasks) {
            this.setState({tasks: tasks});
        }.bind(this));
    },

    handleTaskSubmit: function (task) {
        $.post(this.props.url, {name: task.name, description: task.description}, function (task) {
            var updatedTasks = this.state.tasks.concat(task);
            this.setState({tasks: updatedTasks})
        }.bind(this));
    },

    render: function () {
        return (
            <div className="task-manager-box">
                <h1>Task Manager</h1>
                <NewTaskForm url="https://morning-hollows-57260.herokuapp.com/tasks" handleTaskSubmit={this.handleTaskSubmit}/>
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }
});

var NewTaskForm = React.createClass({
    getInitialState: function () {
        return {name: '', description: ''};
    },

    handleNameChange: function (e) {
        this.setState({name: e.target.value});
    },

    handleDescriptionChange: function (e) {
        this.setState({description: e.target.value});
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var description = this.state.description.trim();
        if (!name || !description) {
            return;
        }
        this.props.handleTaskSubmit({name: name, description: description});
        this.setState({name: '', description: ''});
    },

    render: function () {
        return (
            <form className="newTaskForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task-name">Name</label>
                <input type="text" id="task-name" value={this.state.name} onChange={this.handleNameChange}/>
                <label htmlFor="task-description">Description</label>
                <textarea id="task-description" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                <input type="submit" value="Create Task"/>
            </form>
        );
    }
});

var TasksList = React.createClass({
    render: function () {
        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.props.tasks.map(function (task, i) {
                    return (
                        <tr key={i}>
                            <th>{task.id}</th>
                            <th>{task.name}</th>
                            <th>{task.description}</th>
                            <th><a href="https://morning-hollows-57260.herokuapp.com/tasks/1">Detail</a></th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
});

ReactDOM.render(
    <TaskManager url="https://morning-hollows-57260.herokuapp.com/tasks"/>,
    document.getElementById('task-manager')
);
