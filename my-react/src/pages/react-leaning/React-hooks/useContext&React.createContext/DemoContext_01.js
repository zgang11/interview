import React, {useContext} from 'react'
import { Context } from './Context'
import {Tag} from 'antd'

const DemoContext_01 = () => {
    const {userInfo, otherInfo} = useContext(Context)
    return (<>
     {/* 使用方法 - 01 */}
      <div>
        {Object.entries(userInfo).map(([key,value]) => {
          return (<span key={value}>{key}：<Tag color="#2db7f5">{value}</Tag></span>)
        })}
        <span>大学：<Tag color="#2db7f5">{otherInfo.college}</Tag></span>
      </div>

       {/* 使用方法 - 01 */}
       <div>
       <Context.Consumer>
         {(value) => {
          return Object.entries(userInfo).map(([key,value]) => {
            return (<span key={value}>{key}：<Tag color="#2db7f5">{value}</Tag></span>)
           }) 
         }}
       </Context.Consumer>
       </div>
    </>)
}

export default DemoContext_01