import React, { Component } from "react";
import "./../css/todo-head.css";
class TodoHead extends Component {
  state = {
    todoVal: ""
  };
  add = event => {
    if (event.key === "Enter") {
      this.props.onChangeState(this.state.todoVal, this.clearVal);
    }
  };
  clearVal = () => {
    this.setState({
      todoVal: ""
    });
  };
  handChange = event => {
    this.setState({
      todoVal: event.target.value
    });
  };
  render() {
    const { todoVal } = this.state;
    return (
      <div>
        <span className="completeAll" onClick={this.props.completeAllToggle}>
          全选
        </span>
        <input
          onKeyPress={this.add}
          onChange={this.handChange}
          type="text"
          value={todoVal}
          placeholder="What needs to be done?"
          className="todoInput"
        />
      </div>
    );
  }
}

export default TodoHead;
