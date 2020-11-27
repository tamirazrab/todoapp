import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      todos: {
        description: "Do something",
      },
    };
  }

  handleChange = (e) => {
    const previousTodoItems = this.state.todoItems;
    this.setState((prevState) => ({
      todos: {
        [e.target.name]: [e.target.value],
        isFinished: false,
      },
    }));
    console.log(this.state.todoItems);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state.todos, id: uuid() };
    console.log(newTodo);
    // TODO: pass parent function
    this.props.createTodo(newTodo);
    this.setState((prevState) => ({
      todoItems: [...prevState.todoItems, this.state.todos],
      todos: { description: "", isFinished: false },
    }));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="description">Description</lable>
          <input
            placeholder="description"
            name="description"
            id="description"
            onChange={this.handleChange}
            type="text"
            value={this.state.todos.description}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
