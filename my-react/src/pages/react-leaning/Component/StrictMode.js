// StrictMode见名知意，严格模式，用于检测react项目中的潜在的问题，。与 Fragment 一样， StrictMode 不会渲染任何可见的 UI 。它为其后代元素触发额外的检查和警告。

// StrictMode目前有助于：
// ①识别不安全的生命周期。
// ②关于使用过时字符串 ref API 的警告
// ③关于使用废弃的 findDOMNode 方法的警告
// ④检测意外的副作用
// ⑤检测过时的 context API

// 对于不安全的生命周期，指的是UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps , UNSAFE_componentWillUpdate


import  {Component, StrictMode} from 'react'

class Father extends Component{
    render(){
        return <StrictMode>
            <Index/>
        </StrictMode>
    }
}

class Index extends Component{    
    // UNSAFE_componentWillReceiveProps(){
    //     console.log('jaj')
    // }
    render(){      
        return <div className="box" />   
    }
}


export default Father

