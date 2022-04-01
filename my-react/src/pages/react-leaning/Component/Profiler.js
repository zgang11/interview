// Profiler这个api一般用于开发阶段，性能检测，检测一次react组件渲染用时，性能开销。
// Profiler 需要两个参数：
// 第一个参数：是 id，用于表识唯一性的Profiler。
// 第二个参数：onRender回调函数，用于渲染完成，接受渲染参数。


// 0 -id: root  ->  Profiler 树的 id 。
// 1 -phase: mount ->  mount 挂载 ， update 渲染了。
// 2 -actualDuration: 6.685000262223184  -> 更新 committed 花费的渲染时间。
// 3 -baseDuration:  4.430000321008265  -> 渲染整颗子树需要的时间
// 4 -startTime : 689.7299999836832 ->  本次更新开始渲染的时间
// 5 -commitTime : 698.5799999674782 ->  本次更新committed 的时间
// 6 -interactions: set{} -> 本次更新的 interactions 的集合



import {Profiler} from 'react'
import Memo from './memo'

const index = () => {
    const callback = (...arg) => console.log(arg)
    return <div >
      <div >
        <Profiler id="root" onRender={ callback }  >
             <Memo></Memo>
        </Profiler> 
      </div>
    </div>
  }
  export default index
