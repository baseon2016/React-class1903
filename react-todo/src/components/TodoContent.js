import React, { Component } from "react";
import ItemList from "./ItemList";
import "./../css/todo-content.css";
class TodoContent extends Component {
  state = {
    todoListR: []
  };
  componentDidMount() {}
  componentWillMount() {
    const newTodo = [...this.props.todoList]
      .reverse()
      .filter(element =>
        this.props.showItem === "all"
          ? true
          : this.props.showItem === "active"
          ? element.complete === false
          : element.complete === true
      );
    this.setState({
      todoListR: [...newTodo]
    });
  }
  // componentWillUpdate = () => {

  // };
  componentWillReceiveProps(newProps) {
    if (newProps.todoList !== this.props.todoList) {
      console.log(newProps);
      const newTodo = [...newProps.todoList]
        .reverse()
        .filter(element =>
          newProps.showItem === "all"
            ? true
            : newProps.showItem === "active"
            ? element.complete === false
            : element.complete === true
        );
      this.setState({
        todoListR: [...newTodo]
      });
    }
  }
  render() {
    const { todoListR } = this.state;
    return (
      <div>
        <ItemList
          todoListR={todoListR}
          toggleComplete={this.props.toggleComplete}
          del={this.props.del}
        />
        <div style={{ display: !todoListR.length ? "block" : "none" }}>
          请添加待办事项
        </div>
      </div>
    );
  }
}

export default TodoContent;
