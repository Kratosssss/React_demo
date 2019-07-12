import React from 'react';
import ReactDOM from 'react-dom';

// App相当于一个组件
import TodoList from './TodoList';

// JSX语法 引入React后可使用
// 将App组件挂载到root节点下
ReactDOM.render(<TodoList />, document.getElementById('root'));

