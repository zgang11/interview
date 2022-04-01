import React,{Component} from 'react'

class Form extends Component {
    getInitialState(){
        return {value:'Hello!'}
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
            </div>
        )
    }
}

export default Form