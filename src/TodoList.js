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
      const todos = this.state.todo.map(todo => {
          <Todo 
          description={todo.description}
          isFinished={todo.isFinished}
          removeTodo={() => this.removeTodo(todo.id)}
          />

      });
    return (<div>
        <h1> Minimal Todo's</h1>
        <p> Get things done.</p>
        {/* // FIXME: might need to change it to inline arrow function */}
        <NewTodoForm createTodo={this.createTodo}/>
    </div>);
  }
}

export default TodoList;
