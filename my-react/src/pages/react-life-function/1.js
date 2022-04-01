import React, { Component } from 'react';
/**
 * 父组件
 */
class Counter extends Component {
  static defaultProps = { //初始化默认的属性对象
    name:'计数器'
  }
  constructor(props) {
    super(props);
    this.state = { // 初始化默认的状态对象
      number:0
    }
    console.log('1. 父constructor初始化 props and state');
  }
  componentWillMount() {
    console.log('2. 父componentWillMount组件将要挂载');
  }
  componentDidMount() {
    console.log('4. 父componentDidMount组件挂载完成');
  }
  shouldComponentUpdate() {
    console.log('5. 父componentShouldUpdate询问组件是否可以更新');
    return true;
  }
  componentWillUpdate() {
    console.log('6. 父componentWillUpdate组件将要更新');
  }
  componentDidUpdate() {
    console.log('7. 父componentDidUpdate组件更新完成');
  }
  render() {
    console.log('3. 父render渲染，也就是挂载');
    const style = {display:'block'}
    return (
      <div style={{border:'10px solid green',pending:'10px'}}>
        {this.props.name}:{this.state.number}
        <button onClick={this.add} style={style}>+</button>
        {this.state.number %3 !== 0 && <SubCounter number={this.state.number}/>}
      </div>
    );
  }
  add = () => {
    this.setState({
      number:this.state.number+1
    })
  }
}
/**
 * 子组件
 */
class SubCounter extends Component {
  static defaultProps = {
    number:10
  }
  componentWillReceiveProps() {
    console.log('1. 子componentWillReceiveProps属性将要发生变化 ');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('2. 子componentShouldUpdate询问组件是否可以更新');
    // 调用此方法的时候会把新的属性对象和新的状态对象传递过来
    if (nextProps.number % 3 === 0) {
      return true;
    }
    return false;
  }
  componentWillUnmount() {
    console.log(' 3.子componentWillUnmount组件将要卸载 ');
  }
  render() {
    return (
      <div style={{border:'10px solid red'}}>
        {this.props.number}
      </div>
    );
  }
}
export default Counter;

