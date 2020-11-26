import React, { Component } from 'react'
import uuid from 'uuid/v4';

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                description: 'Do something',
                isFinished: false,
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [`${todo}.${e.target.name}`]: e.target.value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { ...this.state.todo, id: uuid() };
        // TODO: pass parent function 
        this.props.createTodo(newTodo);
        this.setState({
            todo: { description: '', isFinished: false }
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="description" value={this.state.todo.description} name="description" onClick={this.handleChange}
                    type="text"/>
                </form>
                <button>Submit</button>
            </div>
        )
    }
}

export default NewTodoForm;