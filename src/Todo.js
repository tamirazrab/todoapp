import React, { Component } from "react";

 class Todo extends Component {
  render() {
    let { todoDescription , removeTodo} = this.props;
    return (
    // TODO: Display todo list here each todo as li  
    <div>
      <button>Edit</button>
      <button>Delete</button>
      <li>{todoDescription}</li>
    </div>
    );
  }
}

export default Todo;
