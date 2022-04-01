// useEffect可以弥补函数组件没有生命周期的缺点。我们可以在useEffect第一个参数回调函数中，做一些请求数据，事件监听等操作，第二个参数作为dep依赖项，当依赖项发生变化，重新执行第一个函数。

import {useState,useRef,useEffect} from 'react'

/* 模拟数据交互 */
function getUserInfo(a){
    return new Promise((resolve)=>{
        setTimeout(()=>{ 
           resolve({
               name:a,
               age:16,
           }) 
        },500)
    })
}
const DemoEffect = ({ a }) => {
    const [ userMessage , setUserMessage ]= useState({})
    const div= useRef()
    const [number, setNumber] = useState(0)
    /* 模拟事件监听处理函数 */
    const handleResize =()=>{}
    /* useEffect使用 ，这里如果不加限制 ，会是函数重复执行，陷入死循环*/
    useEffect(()=>{
        /* 请求数据 */
       getUserInfo(a).then(res=>{
           setUserMessage(res)
       })
       /* 操作dom  */
       console.log(div.current) /* div */
       /* 事件监听等 */
        window.addEventListener('resize', handleResize)
    /* 只有当props->a和state->number改变的时候 ,useEffect副作用函数重新执行 ，如果此时数组为空[]，证明函数只有在初始化的时候执行一次相当于componentDidMount */
    },[ a ,number ])
    return (<div ref={div} >
        <span>{ 'userMessage.name:' +  userMessage.name }</span>
        <span>{ userMessage.age }</span>
        <div onClick={ ()=> setNumber(1) } >{ number }</div>
    </div>)
}


const DemoEffect01 = ({ a }) => {
    /* 模拟事件监听处理函数 */
    const handleResize =()=>{}
    useEffect(()=>{
       /* 定时器 延时器等 */
       const timer = setInterval(()=>console.log(666),1000)
       /* 事件监听 */
       window.addEventListener('resize', handleResize)
       /* 此函数用于清除副作用 */
       return function(){
           clearInterval(timer) 
           window.removeEventListener('resize', handleResize)
       }
    },[ a ])
    return (<div  >
    </div>)
}

export {DemoEffect01, DemoEffect}


