import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     todoDescription: "" 
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: [e.target.value],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid() };
    // TODO: pass parent function
    this.props.createTodo(newTodo);
    this.setState({
      todoDescription: ""
    }) ;
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor="Description">Description</lable>
          <input
            placeholder="Description of todo"
            name="todoDescription"
            id="todoDescription"
            onChange={this.handleChange}
            type="text"
            value={this.state.todoDescription}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
