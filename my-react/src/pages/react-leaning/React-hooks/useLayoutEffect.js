// useEffect执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。
// useLayoutEffect 执行顺序: 组件更新挂载完成 ->  执行 useLayoutEffect 回调-> 浏览器dom绘制完成。
// 所以说 useLayoutEffect 代码可能会阻塞浏览器的绘制 。我们写的 useffect和 useLayoutEffect，react在底层会被分别打上PassiveEffect，HookLayout，在commit阶段区分出，在什么时机执行。

import {useRef, useLayoutEffect,useEffect,useState} from 'react'
import {Button, Collapse} from 'antd'

const DemoUseLayoutEffect = () => {
    const target = useRef()
    const [color,setColor] = useState('red')

    useLayoutEffect(() => {
        /*我们需要在dom绘制之前，移动dom到制定位置*/
        // const { x=100 ,y=800 }  = {x,y} /* 获取要移动的 x,y坐标 */
        // animate(target.current,{ x,y })
        console.log('useLayoutEffect color:',color)
    });

    // useEffect(()=>{
    //     console.log('useEffect color:',color)
    // })
    return (
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel header='useLayoutEffect使用' key='1'>
             <span style={{marginRight:'12px'}} ref={ target } className="animate">color:{color}   </span>

            <Button style={{marginRight:'12px'}} onClick={() => setColor('red')}>红</Button>
            <Button style={{marginRight:'12px'}} onClick={() => setColor('yellow')}>黄</Button>
            <Button style={{marginRight:'12px'}} onClick={() => setColor('blue')}>蓝</Button>

          </Collapse.Panel>
        </Collapse>
    )
}

export default DemoUseLayoutEffect
