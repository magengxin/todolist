import React from "react";
import ReactDOM from "react-dom";

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];

class Todo extends React.Component {
  render() {
    // if (this.props.content === '图雀') {
    //   return <li>你好, {this.props.content}</li>;
    // } else {
    //   return <li>hello, {this.props.content}</li>;
    // }
    if (this.props.index % 2 === 0) {
      return <li style={{ color: 'red' }}>hello, {this.props.content}</li>;
    }

    return <li>hello, {this.props.content}</li>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nowTodo: '',
      todoList: []
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        todoList: todoList
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodoList = this.state.todoList.concat(this.state.nowTodo);

    this.setState({
      todoList: newTodoList,
      nowTodo: ''
    });
  }

  handelChange(e) {
    this.setState({
      nowTodo: e.target.value
    });
  }

  render() {
    // return <div>Hello, World</div>;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder='请输入内容' onChange={e => this.handelChange(e)}/>
          <input type='submit'/>
        </form>
        <ul>
          {this.state.todoList.map((todo, index) => (
            <Todo content={todo} key={index} index={index}/>
          ))}
        </ul>
      </div>
    );
  }
}

// JSX 中的事件处理
function Button() {
  function handleClick() {
    console.log('点击了');
  }

  return (
    <button onClick={handleClick}>点我</button>
  );
}

// JSX 合成事件 禁用浏览器的默认属性
function Link() {
  function handleClick(event) {
    event.preventDefault();
    console.log('点击了,不会跳转页面');
  }

  return (
    <a onClick={handleClick} target='_blank' href="https://www.baidu.com/">百度</a>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
