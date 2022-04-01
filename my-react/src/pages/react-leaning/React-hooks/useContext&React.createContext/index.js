// useContext可以帮助我们跨越组件层级直接传递变量，实现共享。

// 需要注意的是useContext和redux的作用是不同的！！！
// useContext：解决的是组件之间值传递的问题
// redux：是应用中统一管理状态的问题
// 但通过和useReducer的配合使用，可以实现类似Redux的作用。

import React, {useContext,createContext} from 'react'
import { Card, Collapse } from 'antd'
import DemoContext_01 from './DemoContext_01'
import DemoContext_02 from './DemoContext_02'
// import {Context} from './Context'

// const Context = createContext()

const Context = createContext()

const ReactCreateContext = createContext()

// /* 用useContext方式 */
// const DemoContext = ()=> {
//     const value = useContext(Context)
//     /* my name is alien */
// return <div> my name is { value.name }</div>
// }
// /* 用Context.Consumer 方式 */
// const DemoContext1 = ()=>{
//     return <Context.Consumer>
//          {/*  my name is alien  */}
//         { (value)=> <div> my name is { value.name }</div> }
//     </Context.Consumer>
// }

const DemoUseContext = ()=>{
  const loginInfo = {change:'createChange'}
    return  (<Context.Provider value={{ name:'alien' , age:18 }} >
            <Collapse  defaultActiveKey={[1]}>
              <Collapse.Panel header="useContext使用" key={1}>
                  <DemoContext_01/>
                <ReactCreateContext.Provider value={loginInfo}>
                  <DemoContext_02/>
                </ReactCreateContext.Provider>
              </Collapse.Panel>
            </Collapse>
            
        </Context.Provider>)
}

export default DemoUseContext
