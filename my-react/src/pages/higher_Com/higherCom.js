import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import './higher_Com.css'

class Student extends Component {
    static sayHello(){
        console.log('hello from Student')
    }
    constructor(props){
        super()
        console.log('Student constructor')
    }
    componentWillMount(){
        console.log('Student componentWillMount')
        this.setState({
            name:this.props.name,
            age:this.props.age
        })
    }
    componentDidMount(){
        console.log('Student componentDidMount')
    }
    componentWillReceiveProps(nextProps){
        console.log('Student componentWillReceiveProps')
        console.log(nextProps)
    }
    focus(){
        this.inputElement.focus()
    }
    render(){
        return(<div>
            <p>姓名：{this.state.name}</p>
            <p>
                年龄：
                <input value={this.state.age} ref={(input) =>{this.inputElement = input}}/>
            </p>
            <p>
                <input type='button' value="focus input" onClick={this.focus.bind(this)}/>
            </p>
        </div>)
    }
}

export default Student