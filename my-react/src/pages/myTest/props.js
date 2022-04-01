import react,{Component} from 'react'

class likeButton extends Component{
      constructor(){
          super()
          this.state = {
              islike:false
          }
      }
      static defaultProps = {
          likeText:'好棒帮',
          unLikeText:'一点也不好'
      }

      handleClickOnLikeButton(){
          this.setState({
              islike : !this.state.islike
          })
          if(this.props.onClick){
              this.props.onClick()
          }
      }

      render(){
        const likeText = this.props.likeText || '点赞'
        const unlikeText = this.props.unLikeText || '取消'
        const wording = this.props.wording || {likeText:'点赞',unLikeText:'取消'}
          return (
              <div>
                  <button onClick={this.handleClickOnLikeButton.bind(this)}>
                     {this.state.islike ? likeText : unlikeText}👍
                   </button>
                   <button onClick={this.handleClickOnLikeButton.bind(this)}>
                       {this.state.islike ? wording.likeText : wording.unLikeText}👍
                   </button>
              </div>
          )
      }
}

export default likeButton