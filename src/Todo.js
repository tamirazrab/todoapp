import React, { Component } from "react";
import "./TodoList.css";

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
  };
  handleDelete = () => {
    this.props.removeTodo(this.props.id);
  };
  render() {
    let { todoDescription } = this.props;
    let renderTodo;
    if (this.state.isEditing) {
      renderTodo = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate} className="Todo-edit-form">
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
        <div className="Todo">
          <li
            className={
              this.props.isFinished ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggleCompletion}
          >
            {this.props.todoDescription}
          </li>
          <div className="Todo-buttons">
          <button onClick={this.toggleEditingForm}>
            <i class="fa fa-pen" />
          </button>
          <button onClick={this.handleDelete}>
            <i class="fa fa-trash" />
          </button>
          </div>
        </div>
      );
    }
    return renderTodo;
  }
}

export default Todo;
