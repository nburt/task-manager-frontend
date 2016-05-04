import React, {Component, PropTypes} from 'react'

class NewTaskForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || '',
            description: this.props.description || ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var description = this.state.description.trim();
        if (!name || !description) {
            return;
        }
        this.props.handleTaskSubmit({name: name, description: description});
        this.setState({name: '', description: ''});
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    render() {
        return (
            <form className="newTaskForm" onSubmit={this.handleSubmit}>
                <div className="columns">
                    <div className="form-field column half">
                        <label htmlFor="task-name">Name</label>
                        <input type="text" id="task-name" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="form-field column half">
                        <label htmlFor="task-description">Description</label>
                    <textarea id="task-description" value={this.state.description}
                              onChange={this.handleDescriptionChange}>
                    </textarea>
                    </div>
                </div>
                <div className="columns">
                    <div className="form-field column half">
                        <input type="submit" value="Create Task" className="button button-primary"/>
                    </div>
                </div>
            </form>
        )
    }
}

NewTaskForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    handleTaskSubmit: PropTypes.func.isRequired
};

export default NewTaskForm
