import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./Todo.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  createTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
    console.log(this.state.todos);
  };

  updateTodo = (id, updatedTodoDescription) => {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoDescription: updatedTodoDescription };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodo,
    });
  };

  toggleCompleted = (id) => {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isFinished: !todo.isFinished };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodo,
    });
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  };
  render() {
    const todosList = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          isFinished={todo.isFinished}
          todoDescription={todo.todoDescription}
          updateTodo={this.updateTodo}
          removeTodo={this.removeTodo}
          toggleCompleted={this.toggleCompleted}
        />
      );
    });
    console.log(todosList);
    return (
      <div className="TodoList">
        <h1>
          {" "}
          Minimal Todo's <span> Get things done.</span>
        </h1>

        <ul>{todosList}</ul>
        <NewTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
