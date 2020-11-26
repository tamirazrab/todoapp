import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    let { description, isFinished } = this.props;
    return (
      <div className="todo-container">
        <div className="todo-box">{description}</div>
        {/* FIXME: maybe need to more than one div for each button */}
        <div className="todo-buttons">
          {/* TODO: add buttons here X for delete C for check */}
        </div>
      </div>
    );
  }
}
