import React, { Component } from "react";
import "./../css/todo-func.css";
class TodoFunc extends Component {
  state = {
    todoNum: null,
    showClear: null
  };
  // componentWillUpdate = () => {
  //   const newTodo = [...this.props.todoList].filter(
  //     ele => ele.complete === false
  //   );
  //   const completeTodo = [...this.props.todoList].filter(
  //     ele => ele.complete === true
  //   );
  //   this.setState({
  //     todoNum: newTodo.length,
  //     showClear: completeTodo.length ? true : false
  //   });
  // };
  render() {
    const { todoNum, showClear } = this.state;
    return (
      <div className="func">
        <div>
          <span>{todoNum} items left</span>
        </div>
        <div className="options">
          <span
            className={this.props.showItem === "all" ? "selected" : ""}
            onClick={() => this.props.change("all")}
          >
            All
          </span>
          <span
            className={this.props.showItem === "active" ? "selected" : ""}
            onClick={() => this.props.change("active")}
          >
            Active
          </span>
          <span
            className={this.props.showItem === "complete" ? "selected" : ""}
            onClick={() => this.props.change("complete")}
          >
            Completed
          </span>
        </div>
        <div className="clear">
          <span
            style={{ display: showClear ? "block" : "none" }}
            onClick={this.props.clearComplete}
          >
            Clear completed
          </span>
        </div>
      </div>
    );
  }
}

export default TodoFunc;
