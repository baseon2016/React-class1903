import React, { Component } from "react";
import "./../css/todo-content.css";
class TodoContent extends Component {
  state = {};

  render() {
    // 对state属性参数的计算,直接写到render函数内,但是一定保证不能修改state
    const todoListR = [...this.props.todoList]
      .reverse()
      .filter(element =>
        this.props.showItem === "all"
          ? true
          : this.props.showItem === "active"
          ? element.complete === false
          : element.complete === true
      );
    const showList = todoListR.map(item => (
      <li key={item.id}>
        <span
          className={`select ${item.complete === true ? "selected" : ""}`}
          onClick={() => this.props.toggleComplete(item.id)}
        />
        <span className={`content ${item.complete === true ? "selected" : ""}`}>
          {item.content}
        </span>
        <span className="del" onClick={() => this.props.del(item.id)}>
          X
        </span>
      </li>
    ));
    return (
      <div>
        <ul style={{ display: todoListR.length ? "block" : "none" }}>
          {showList}
        </ul>
        <div style={{ display: !todoListR.length ? "block" : "none" }}>
          请添加待办事项
        </div>
      </div>
    );
  }
}

export default TodoContent;
