import React, { Component } from "react";
class Ceshi extends Component {
  // constructor 属于比较古老的写法也比较麻烦，这里创建非受控表单元素使用一种新方法
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.input = React.createRef();
  // }
  state = {};
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value);
    // alert("A name was submitted: " + this.input.current.value);
  };

  render() {
    return (
      <form>
        {/* constructor写法对应的ref写法 */}
        {/* <label>
          Name:
          <input type="text" ref={this.input} />
        </label> */}
        {/* 下面使用新写法创建非受控表单,a是ref的形参指的是dom节点，this.xxx是声明全局变量 赋值全局变量为dom节点*/}
        <label>
          Name:
          <input type="text" ref={a => (this.input = a)} />
        </label>
        <input onClick={this.handleSubmit} type="submit" value="Submit" />
      </form>
    );
  }
}

export default Ceshi;
