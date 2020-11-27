import React, { Component } from "react";
import NewTodoForm from './NewTodoForm';
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  createTodo = (newTodo) => {
    this.setState({
      todos: [ ...this.state.todos, newTodo],
    });
    console.log(this.state.todos);
  };

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  };
  render() {
      const todosList = this.state.todos.map(todo => {
          return <Todo 
          todoDescription={todo.todoDescription}
          removeTodo={this.removeTodo}
          />

      });
      console.log(todosList);
    return (<div>
        <h1> Minimal Todo's</h1>
        <p> Get things done.</p>
        {/* // FIXME: might need to change it to inline arrow function */}
        <NewTodoForm createTodo={this.createTodo}/>
        <ul>{todosList}</ul>
    </div>);
  }
}

export default TodoList;
