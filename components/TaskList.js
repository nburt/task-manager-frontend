import React, { Component, PropTypes } from 'react'

class TaskList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { tasks } = this.props;
        return (
            <table className="table">
                <thead>
                <tr className="columns">
                    <th className="column fourth">Name</th>
                    <th className="column fourth">Description</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map(function (task, i) {
                    return (
                        <tr key={i} className="columns">
                            <td className="column fourth">{task.name}</td>
                            <td className="column fourth">{task.description}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList
