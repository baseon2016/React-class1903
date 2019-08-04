import React, { Component } from "react";
import "./../css/todo-head.css";
class TodoHead extends Component {
  state = {
    todoVal: ""
  };
  handChange = event => {
    this.setState({
      todoVal: event.target.value
    });
  };
  submit = () => {};
  render() {
    const { todoVal } = this.state;
    return (
      <div>
        <span className="completeAll" onClick={this.props.completeAllToggle}>
          全选
        </span>
        <input
          onKeyPress={event => this.props.onChangeState(event, todoVal)}
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
