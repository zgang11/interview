import React,{Component} from 'react'

class likeButton extends Component{
      constructor(){
          super()
          this.state = {
              islike:false
          }
      }

      handleClickOnLikeButton(){
          this.setState({
              islike : !this.state.islike
          })
      }

      render(){
          return (
              <button onClick={this.handleClickOnLikeButton.bind(this)}>
                  {this.state.islike ? '取消' :'点赞'}👍
              </button>
          )
      }
}

export default likeButton