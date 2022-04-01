import React, { Component } from 'react';
/**
 * 父
 */
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:0
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <SubCounter number={this.state.number}/>
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
 * 子
 */
class SubCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:0
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.number % 2 === 0) {
      return {number:nextProps.number*2}
    } else {
      return {number:nextProps.number*3}
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <p>{this.state.number}</p>
      </div>
    );
  }
}
export default Counter;
