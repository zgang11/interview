import React from "react"

function withWindowWidth(BaseComponent) {
    class DerivedClass extends React.Component {
        state = {
            windowWidth: window.innerWidth,
        }
        onResize = () => {
            this.setState({
                windowWidth: window.innerWidth,
            })
        }
        componentDidMount() {
            window.addEventListener('resize', this.onResize)
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.onResize);
        }
        render() {
            return <BaseComponent  {...this.state} />
        }
    }
    return DerivedClass;
}
const MyComponent = (props) => {
    console.log("props:", props)
    return <div>Window width is: {props.windowWidth}</div>
};
export default withWindowWidth(MyComponent);