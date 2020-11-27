import React, { Component } from "react";

 class Todo extends Component {
   handleDelete = () => {
     this.props.removeTodo(this.props.id);
   }
  render() {
    let { todoDescription , removeTodo} = this.props;
    return (
    // TODO: Display todo list here each todo as li  
    <div>
      <button>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
      <li>{todoDescription}</li>
    </div>
    );
  }
}

export default Todo;
