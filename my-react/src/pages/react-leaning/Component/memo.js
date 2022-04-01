// React.memo和PureComponent作用类似，可以用作性能优化，React.memo 是高阶组件，函数组件和类组件都可以使用， 和PureComponent区别是 React.memo只能对props的情况确定是否渲染，而PureComponent是针对props和state。
// React.memo 接受两个参数，第一个参数原始组件本身，第二个参数，可以根据一次更新中props是否相同决定原始组件是否重新渲染。是一个返回布尔值，true 证明组件无须重新渲染，false证明组件需要重新渲染，这个和类组件中的shouldComponentUpdate()正好相反 。
// React.memo: 第二个参数 返回 true 组件不渲染 ， 返回 false 组件重新渲染。
// shouldComponentUpdate: 返回 true 组件渲染 ， 返回 false 组件不渲染。


import React from 'react'

function TextMemo(props){
    let name = "jaj"
    console.log('this:',this)
    // console.log('子组件渲染','props:',props,'name:',name)
    console.log('refresh:','props:',props)
    if(props) return <div>hello,world</div> 
}

const controlIsRender = (pre,next)=>{
    console.log('pre:',pre,'next:',next)
    if(pre.number === next.number  ){ // number 不改变 ，不渲染组件
        return true 
    }else if(pre.number !== next.number && next.number > 5 ) { // number 改变 ，但值大于5 ， 不渲染组件
        return true
    }else { // 否则渲染组件
        return false
    }
 }

 const NewTexMemo = React.memo(TextMemo,controlIsRender)
 //浅比较
 const ShadowTextMemo = React.memo(TextMemo)
 class Index extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:1,
            num:1,
            level:{
                num:1,
                number:1
            }
        }
    }
    handleClick = ()=>{
        const {level} = this.state
        level.num++
        level.number++
        this.setState({level:{...level}})
        console.log(this.state.level,level)
    }
    render(){
        const { num , number, level }  = this.state
        return <div>
            <div>
                改变num：当前值 { num }  
                <button onClick={ ()=>this.setState({ num:num + 1 }) } >num++</button>
                <button onClick={ ()=>this.setState({ num:num - 1 }) } >num--</button>  
            </div>
            <div>
                改变number： 当前值 { number } 
                <button onClick={ ()=>this.setState({ number:number + 1 }) } > number ++</button>
                <button onClick={ ()=>this.setState({ number:number - 1 }) } > number -- </button>  
            </div>
            <div>
                浅比较props: 当前值 { level.num },{level.number} 
                <button onClick={this.handleClick} >level.number++</button>
            </div>
            {/* <NewTexMemo num={ num } number={number}  /> */}
            <ShadowTextMemo level={level} />
        </div>
    }
}
export default Index



