import React, { useRef, useState } from 'react'

/**
 *  函数返回初始化数据
 */
const UseRefInitialValueFunc = () => {
    const initialValueFunc = () => {
        // ...
        return '初始化数据'
    }
    // 函数返回初始化数据
    const initRef = useRef(initialValueFunc())
    const handleClick = () => {
        console.log(initRef.current) // 初始化数据
    }
   return (<div onClick={handleClick}>点击</div>)
}

/**
 * 
 * 通过useRef来获取dom元素，或者class组件实例
 */
function UseRefGetDom() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      console.log("inputEl：",inputEl)
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>输入框聚焦</button>
      </>
    );
}

/**
 * 
 * useRef 返回的 ref 对象在组件的整个生命周期内保持不变
 */
 function UseRefDuration() {
    const [state,setState] = useState(0)
    const currentRef = useRef(0)
    const handleClick = () => {
      setState(() => state + 1)
      currentRef.current = currentRef.current + 1
      // state和currentRef.current同时+1。
      // console输出渲染之前state和currentRef.current值；页面显示渲染之后state和currentRef.current值
      console.log("state:",state,"currentRef:",currentRef)
    };
    return (
      <>
        <div>state:{state}</div>
        <div>currentRef.current:{currentRef.current}</div>
        <button onClick={handleClick}>输入框聚焦</button>
      </>
    );
}

export  { UseRefInitialValueFunc, UseRefGetDom, UseRefDuration }