// 回调函数返回ref
import React from "react";


//例子1
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
  
      this.textInput = null;//声明并且初始化"dom节点引用"的变量，默认值为null即没有引用任何dom
  
      //回调函数返回dom节点的引用，此时返回的具体dom节点为text 输入框获
      this.setTextInputRef = element => {
        this.textInput = element;
      };
  
      this.focusTextInput = () => {
        // 直接使用原生 API 使 text 输入框获得焦点
        if (this.textInput) //判断dom节点引用是否已经挂载dom节点
        this.textInput.focus();
      };
    }
  
    componentDidMount() {
      // 渲染后文本框自动获得焦点
      this.focusTextInput();
    }
  
    render() {
      // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
      // 实例上（比如 this.textInput）
      return (
        <div>
          <input
            type="text"
            ref={this.setTextInputRef}//回调函数方式声明refs
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

// 列子2

function Child(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
}

class Parent extends React.Component {

    componentDidMount() {
        if(this.textInputRef) {
            this.textInputRef.focus()
        }
    }

    render(){
        return(
            <Child inputRef={el => this.textInputRef = el}></Child>
        )
    }
}


  export  { CustomTextInput, Parent }