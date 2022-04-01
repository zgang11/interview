import {useState,useEffect} from 'react'
import {Collapse,Button,Row,Col,Alert,Card} from 'antd'

const DemoState = (props) => {
    /* number为此时state读取值 ，setNumber为派发更新的函数 */
    let [number, setNumber] = useState(0) /* 0为初始值 */

    const initalData = () => {
      return {
        name:'zhanggang',
        age:27
      }
    }
    const unitData = {
      name:'zhanggang',
        age:27
    }
    const [sameState1,setSameState1] = useState(unitData)
    const [sameState2,setSameState2] = useState(unitData)


    useEffect(()=>{
      console.log('sameState1:',sameState1)
      console.log('sameState2:',sameState2)
    },[sameState1])

    useEffect(()=>{
      console.log('useEffect-number:',number)
    },[number])

    return (<Collapse title="useState" defaultActiveKey={['1']} >
      <Collapse.Panel header="useState使用" key="1">
        <span style={{marginRight:'24px'}}>{ number }</span>
        <Button type={'primary'} onClick={ ()=> {
          setNumber(number+1) /* 写法一 */
          setNumber(number=>number + 1 ) /* 写法二 */
          setNumber((old) => old+2)
          console.log('number:',number) /* 这里的number是不能够即时改变的  */
        } } >num++</Button>
        <Row>
          <Col style={{marginTop:'14px'}}>
            <Alert showIcon message="根据hook的规则，使用useState的位置有限制仅顶层调用 Hook ：不能在循环，条件，嵌套函数等中调用useState()。在多个useState()调用中，渲染之间的调用顺序必须相同。仅从React 函数调用 Hook:必须仅在函数组件或自定义钩子内部调用useState()。" type="warning" />
          </Col>
          <Col style={{marginTop:'14px'}}>
            <Card title="useState存入的值只是该值的引用（引用类型)">
              <Button onClick={()=>setSameState1((old) => ({...old,age:30}))}>触发更改值(diff)</Button>
              <Button onClick={()=>setSameState1((old) => {return {...old,age:30}})}>触发更改值</Button>
              <Button onClick={()=>setSameState1((old) => {old.age=67;return {...old}})}>触发更改值</Button>
            </Card>
          </Col>
        </Row>
       </Collapse.Panel>
    </Collapse>)
 }

 export default DemoState
