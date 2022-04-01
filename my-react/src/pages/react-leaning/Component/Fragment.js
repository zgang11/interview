
import { Fragment } from 'react'

const FragmentCom = ()=>{
    return <Fragment>
        <div>1</div>
        <FragmentComSimple>1</FragmentComSimple>
    </Fragment>
}
//和Fragment区别是，Fragment可以支持key属性。<></>不支持key属性
const FragmentComSimple = ()=>{
    return <>
         {[1,2,4].map(item => <span key={item}>{item}</span>)}
    </>
}

export default FragmentCom