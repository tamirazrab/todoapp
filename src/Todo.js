import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.todoDescription,
    };
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleEditingForm();
  };
  handleChange = (e) => {
    this.setState({
      task: [e.target.value],
    });
  };

  toggleEditingForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleToggleCompletion = () => {
    this.props.toggleCompleted(this.props.id);
  }
  handleDelete = () => {
    this.props.removeTodo(this.props.id);
  };
  render() {
    let { todoDescription } = this.props;
    let renderTodo;
    if (this.state.isEditing) {
      renderTodo = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="text"
              onChange={this.handleChange}
            />
            <button>Done</button>
          </form>
        </div>
      );
    } else {
      renderTodo = (
      <div>
        <button onClick={this.toggleEditingForm}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        <li className={this.props.isFinished && "completed-todo"} onClick={this.handleToggleCompletion} >{this.props.todoDescription}</li>
      </div>
      );
    }
    return renderTodo;
  }
}

export default Todo;
