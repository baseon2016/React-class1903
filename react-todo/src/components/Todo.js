import React, { Component } from "react";
import TodoHead from "./TodoHead";
import TodoContent from "./TodoContent";
import TodoFunc from "./TodoFunc";
import "./../css/todo.css";
class Todo extends Component {
  state = {
    todoList: [
      {
        complete: true,
        content: "124",
        id: 8
      },
      {
        complete: false,
        content: "235",
        id: 9
      }
    ],
    showItem: "all"
  };
  change = payload => {
    this.setState({
      showItem: payload
    });
  };
  onChangeState = (event, payload) => {
    if (event.key === "Enter") {
      if (payload.trim() !== "") {
        let newItem = {
          complete: false,
          content: payload,
          id: Date.now()
        };
        this.setState({ todoList: [...this.state.todoList, newItem] });
      } else {
        alert("请输入有效内容");
      }
    }
  };
  completeAllToggle = () => {
    if (this.state.todoList.every(ele => ele.complete === true)) {
      const todos = this.state.todoList.map(element => {
        const todo = { ...element };
        todo.complete = false;
        return todo;
      });
      this.setState({
        todoList: todos
      });
    } else {
      const todos = this.state.todoList.map(element => {
        const todo = { ...element };
        todo.complete = true;
        return todo;
      });
      this.setState({
        todoList: todos
      });
    }
  };
  toggleComplete = payload => {
    const status = this.state.todoList.find(ele => ele.id === payload).complete;
    const todos = ([...this.state.todoList].find(
      ele => ele.id === payload
    ).complete = !status);
    this.setState({
      todoList: todos
    });
  };
  del = payload => {
    const todos = this.state.todoList.filter(ele => ele.id !== payload);
    this.setState({
      todoList: todos
    });
  };
  clearComplete = () => {
    const todos = this.state.todoList.filter(ele => ele.complete === false);
    this.setState({
      todoList: todos
    });
  };
  render() {
    const { todoList, showItem } = this.state;
    return (
      <div className="todo">
        <TodoHead
          onChangeState={this.onChangeState}
          completeAllToggle={this.completeAllToggle}
        />
        <TodoContent
          todoList={todoList}
          showItem={showItem}
          toggleComplete={this.toggleComplete}
          del={this.del}
        />
        <TodoFunc
          todoList={todoList}
          showItem={showItem}
          change={this.change}
          clearComplete={this.clearComplete}
        />
      </div>
    );
  }
}

export default Todo;
