import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  createTodo = (newTodo) => {
    this.setState({
      todo: [...this.state.todo, newTodo],
    });
  };

  removeTodo = (id) => {
    this.setState({
      todo: this.state.todo.filter((t) => t.id !== id),
    });
  };
  render() {
    return <div></div>;
  }
}
