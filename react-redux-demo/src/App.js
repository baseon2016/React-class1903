import React from "react";

import Count from "./components/Count";
import Address from "./components/Address";
import { connect } from "react-redux";
function App(props) {
  console.log(props);
  // 由于count组件需要使用store中的数据
  // 我们可以在父组件App去动态获取store中的数据,（什么叫动态获取:store数据改变 组件内的东西也变,并不是使用getState()）
  // 在react-redux包中拿connect方法
  //connect 是一个高阶函数,需要调用两次 connnect()()
  // 第一次调用需要接收一个函数作为参数,这个函数叫做mapStateToProps将store中的state映射成该组件的props
  //这个mapStateToProps函数默认接收一个state作为参数,该参数指的是store中的state,mapStateToProps函数还必须返回一个对象,这个对象就是作为组件的props
  //第二次调用需要接收一个组件作为参数,此次调用作用是将mapStateToProps函数的返回值当做props传递给组件，并返回该组件
  // 所以组件的导出写成export default connect(mapStateToProps)(App)
  return (
    <div className="App">
      <Count count={props.count} />
      <Address address={props.address} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count: state.count,
    address: state.address
  };
};
export default connect(mapStateToProps)(App);
