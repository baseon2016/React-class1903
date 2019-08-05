import React, { Component } from "react";
import TodoHead from "./TodoHead";
import TodoContent from "./TodoContent";
import TodoFunc from "./TodoFunc";
import "./../css/todo.css";
import axios from "axios";
import Ceshi from "./Ceshi";
class Todo extends Component {
  state = {
    todoList: [],
    showItem: "all"
  };
  componentDidMount() {
    axios.get("http://localhost:5000/todolist").then(res => {
      this.setState({ todoList: res.data });
    });
  }
  change = payload => {
    this.setState({
      showItem: payload
    });
  };
  onChangeState = (payload, clearVal) => {
    const { todoList } = this.state;
    if (payload.trim() !== "") {
      let newItem = {
        complete: false,
        content: payload,
        id: Date.now()
      };
      axios.post("http://localhost:5000/todolist", newItem).then(res => {
        this.setState({
          todoList: [...todoList, res.data]
        });
        clearVal();
      });
    } else {
      alert("请输入有效内容");
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
  // 修改对象数组中某一项，而数组的length没有变化，使用Map方法更简单
  toggleComplete = payload => {
    const { todoList } = this.state;
    axios
      .patch(`http://localhost:5000/todolist/${payload}`, {
        complete: !todoList.find(ele => ele.id === payload).complete
      })
      .then(res => {
        this.setState({
          todoList: todoList.map(ele => {
            if (ele.id === payload) {
              return res.data;
            }
            return ele;
          })
        });
      });
  };
  del = payload => {
    axios.delete(`http://localhost:5000/todolist/${payload}`).then(res => {
      const todos = this.state.todoList.filter(ele => ele.id !== payload);
      this.setState({
        todoList: todos
      });
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
        <Ceshi />
      </div>
    );
  }
}

export default Todo;
