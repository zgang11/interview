import React from 'react'

class Test extends React.Component{
    componentDidMount(){
        console.log('--componentDidMount--')
    }
    render(){
        return <>Test组件</>
    }
}

const LazyComponent =  React.lazy(()=> new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({
            default: ()=> <Test />
        })
    },2000)
}))

class Lasy extends React.Component{   
    render(){
        return <div className="context_box"  style={ { marginTop :'50px' } }   >
           <React.Suspense fallback={ <div className="icon" >loading</div> } >
               <LazyComponent />
           </React.Suspense>
        </div>
    }
}


export default Lasy
