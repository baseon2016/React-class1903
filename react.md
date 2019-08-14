## react

#### react 搭建环境

使用官方的脚手架 create-react-app,如何使用

1. `npx create-react-app my-react-app` 前提 node>=8.10 和 npm >=5.6
2. 全局安装 create-react-app 包,`npm i -g create-react-app`,使用命令`create-react-app my-react-app`即可

#### react 的基础知识

##### JSX 语法

在 js 文件内写 html 语法

如何在 html 内写 js,html 内的 js 语法都使用{}套上

######条件渲染
直接在 html 内使用 js 做判断即可

######列表渲染
将你的列表使用 map 方法 转化成标签数组直接放到 html 内,自动会被渲染

######事件处理

- 如何绑定事件

1. 首先在组件的 class 内创建一个方法 handleClick
2. 使用标签的 onClick 属性绑定事件 例如`<span onClick={this.handleClick}></span>`

- 事件绑定如何传递参数

1. 事件绑定必须是一个函数而不是函数调用
2. 要把你定义好的 handleClick 放到一个箭头函数内去执行，并传参。然后把该箭头函数绑定给 onClick 属性
   。例如`<span onClick={()=>this.handleClick(argument)}></span>`
   **额外注意 事件对象 event 这个对象必须是事件函数才有的**

######state
组件的状态,react 框架要求所有页面变化需要和 state 有直接联系

1. 如何定义
   在 class 内

```js
class Button extends Component {
  state = { count: 0 };
}
```

2. render 函数内获取 this.state
3. 修改 state 必须通过 setState 函数修改

######props

父子组件传递数据

1. 在父组件内直接给子组件自定义一个属性，把想传递的数据当做属性值传递过去
   `<Button text='父组件的数据'/>`
2. 在子组件内会有一个默认的 props 属性 来存储父组件传递过来的数据
   `this.props.text`
3. 可以通过 Button(组件名).defaultProps 设置 props 的默认值,也可以使用环境自带的 prop-type 包对 props 进行类型检查

```js
import PropTypes from "prop-types";
Btn.propTypes = {
  text: PropTypes.string
};
// propTypes 设置参数默认值
Btn.defaultProps = {
  text: "默认按钮"
};
```

###### react 路由

- 安装 npm i react-router-dom
- 路由中比较重要的组件 BrowserRouter Route Link NavLink
  BrowserRouter 该组件是路由的包裹组件(凡是和路由相关的东西都必须有该组件包裹,它模拟的页面完全仿照浏览器历史记录)
  Route 该组件代表一个页面,当页面的地址和该组件的 path 匹配时,就展示该组件对应的 component
  Link NavLink 这两个组件就是用来做路由跳转的(组件的 to 属性)
- 自定义组件如果被 Route 包裹了(写在了 Route 的 Component 属性下),那么该组件默认会接收一些相关路由的 props(history location match)

###### react 组件的样式处理

一般来说我们直接创建对应的 css 文件,在导入到组件内,也可以在组件内的 html 标签写行内样式,导入的文件样式是全局的

1. 如何在 react 项目内使用 sass

- 安装 `npm i node-sass`
- react 新环境默认支持 sass 语法,不需要我们手动修改配置文件(熟悉 webpack 的话会很简单)
- 在组件内直接引入 scss 文件即可

2. 如何让组件的样式私有化

- 直接把样式写在行内
- 使用 styled-components 包解决

###### react 使用插件 ui 蚂蚁

- 整体引入方式

1. 现在从 yarn 或 npm 安装并引入 antd。

```
$ yarn add antd
npm i antd
```

2. 修改 src/App.js，引入 antd 的按钮组件。

```js
import React, { Component } from "react";
import Button from "antd/es/button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
export default App;
```

3. 修改 src/App.css，在文件顶部引入 antd/dist/antd.css。

```js
@import '~antd/dist/antd.css';

.App {
  text-align: center;
}

...
```

- 部分引入，按需引入

1. 引入<font color='red'> react-app-rewired </font>并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 <font color='red'>customize-cra</font>。

```js
$ yarn add react-app-rewired customize-cra

/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

2. 然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

3. 使用 babel-plugin-import#

注意：antd 默认支持基于 ES module 的 tree shaking，js 代码部分不使用这个插件也会有按需加载的效果。

<table><tr><td bgcolor='powderblue'>
babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件。
</td></tr></table>

```js
$ yarn add babel-plugin-import
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
- // do stuff with the webpack config...
- return config;
- };

* module.exports = override(
* fixBabelImports('import', {
*     libraryName: 'antd',
*     libraryDirectory: 'es',
*     style: 'css',
* }),
* );

```

<font color='red'>然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 样式代码，并且按下面的格式引入模块。</font>

```js
  // src/App.js
  import React, { Component } from 'react';
- import Button from 'antd/es/button';
+ import { Button } from 'antd';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      );
    }
  }

  export default App;
```

######react redux

1. 安装

- npm i redux

2. 创建

- 创建 src/store.js
- 在 store.js 内

```js
import { createStore } from "redux";

const initialState = {
  count: 10
};

const rootReducer = (state = initialState, action) => {
  return state;
};
const store = createStore(rootReducer);
export default store;
```

3. 静态获取

- 在组件内导入 store 使用 `store.getState()`

4. 修改 state

- 在 store.js 内的 reducer 函数内

```js
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state.count++;
      break;
    default:
      break;
  }
  return state;
};
```

######react 项目启动修改 port

```json
"start":"set PORT=3000 && react-scripts start"
```
