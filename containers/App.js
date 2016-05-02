import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TaskManager from '../components/TaskManager'
import * as TaskActions from '../actions'

class App extends Component {

    componentDidMount() {
        const { dispatch} = this.props;
        dispatch(TaskActions.fetchTasks());
    }

    render() {
        const { tasks, actions } = this.props;
        return (
            <div>
                <TaskManager tasks={tasks} actions={actions} url="https://morning-hollows-57260.herokuapp.com/tasks"/>
            </div>
        )
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TaskActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
