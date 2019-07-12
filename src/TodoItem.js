import React,{Component} from 'react';
class TodoItem extends Component {
	
	constructor(props){
		super(props);
		// 这一句相当于把整个组件中的handleClick方法都与TodoItem绑定了
		this.handleClick=this.handleClick.bind(this);
	}

	render(){
		return(
			<div onClick={this.handleClick}>
				{this.props.content}
			</div>
		)
	}
	handleClick(){
		this.props.deleteItem(this.props.index)
	}
}
export default TodoItem;