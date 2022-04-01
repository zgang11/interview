import React, {useContext} from 'react'
import { ReactCreateContext } from './reacteCreateContext'
import {Tag} from 'antd'

const DemoContext_02 = () => {
    const {loginInfo} = useContext(ReactCreateContext)
    return (<>

       {/* 使用方法 - 01 */}
       <div>
       <ReactCreateContext.Consumer>
         {(value) => {
          return Object.entries(loginInfo).map(([key,value]) => {
            return (<span key={value}>{key}：<Tag color="#2db7f5">{value}</Tag></span>)
           }) 
         }}
       </ReactCreateContext.Consumer>
       </div>
    </>)
}

export default DemoContext_02