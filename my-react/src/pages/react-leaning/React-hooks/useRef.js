import {Collapse} from 'antd'
import {Input,Row,Col} from 'antd'
// useRef的作用：

// 一 是可以用来获取dom元素，或者class组件实例 。
// 二 react-hooks原理文章中讲过，创建useRef时候，会创建一个原始对象，只要函数组件不被销毁，原始对象就会一直存在，那么我们可以利用这个特性，来通过useRef保存一些数据。


import React,{useRef, useState} from 'react'


//获取dom元素
const DemoUseRef = ()=>{
    const dom= useRef(null)
    const dom01 = useRef(null)
    const inp = useRef()
    const handleSubmit = ()=>{
        /*  <div >表单组件</div>  dom 节点 */
        const {current} = dom01
        console.log(dom.current)
        console.log("dom01",dom01)
        inp.current.focus()
    }
    return <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel header='useRef使用' key='1'>
            <Row>
                {/* ref 标记当前dom节点 */}
                <Row>
                    <div ref={dom} >表单组件</div>
                    <div ref={dom01} >表单组件01010</div>
                    <button onClick={()=>handleSubmit()} >提交</button> 
                    <br/>
                </Row>
                <Col span={24}>
                 <Input ref={inp}/>
                </Col>
            </Row>
        </Collapse.Panel>
        <Collapse.Panel header={'forwardRef使用'}>
          <ForwardRef/>
        </Collapse.Panel>
    </Collapse>
}


let Child = (props) => {
    const {ref} = props
    return (
        <Input ref={ref}/>
    )
}
Child = React.forwardRef(Child)
const ForwardRef = () => {
   const ref = useRef()
   function getFocus(){
       ref.current.value = 'focus'
       ref.current.getFocus()
   }

    return (
        <>
          <Child ref={ref}/>
          <button onClick={getFocus}>获得焦点</button>
        </>
    )
}

export  default DemoUseRef
