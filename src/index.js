import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
  render() {
    return <div>hello {this.props.content}</div>;
  }
}

class App extends React.Component {
  render() {
    // return <div>Hello, World</div>;
    const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    return (
      <ul>
        {/*<li>Hello, {todoList[0]}</li>*/}
        {/*<li>Hello, {todoList[1]}</li>*/}
        {/*<li>Hello, {todoList[2]}</li>*/}
        {/*<li>Hello, {todoList[3]}</li>*/}
        <Todo content={todoList[0]}/>
        <Todo content={todoList[1]}/>
        <Todo content={todoList[2]}/>
        <Todo content={todoList[3]}/>
      </ul>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
