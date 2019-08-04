import React, { Component } from "react";
class ItemList extends Component {
  state = { showList: [] };
  componentWillMount() {
    this.setState({
      showList: this.props.todoListR.map(item => (
        <li key={item.id}>
          <span
            className={`select ${item.complete === true ? "selected" : ""}`}
            onClick={() => this.props.toggleComplete(item.id)}
          />
          <span
            className={`content ${item.complete === true ? "selected" : ""}`}
          >
            {item.content}
          </span>
          <span className="del" onClick={() => this.props.del(item.id)}>
            X
          </span>
        </li>
      ))
    });
    // console.log(this.showList);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.todoListR !== this.props.todoListR) {
      console.log(newProps);
      this.setState({
        showList: newProps.todoListR.map(item => (
          <li key={item.id}>
            <span
              className={`select ${item.complete === true ? "selected" : ""}`}
              onClick={() => this.props.toggleComplete(item.id)}
            />
            <span
              className={`content ${item.complete === true ? "selected" : ""}`}
            >
              {item.content}
            </span>
            <span className="del" onClick={() => this.props.del(item.id)}>
              X
            </span>
          </li>
        ))
      });
    }
  }
  render() {
    const { showList } = this.state;
    return (
      <ul style={{ display: this.props.todoListR.length ? "block" : "none" }}>
        {showList}
      </ul>
    );
  }
}

export default ItemList;
