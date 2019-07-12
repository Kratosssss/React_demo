import React,{Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
	// 类组件 最先执行的构造方法
	constructor(props){
		super(props);
		this.state = {
			inputValue:'hello!!!',
			list:['学习英文','学习reeact']
		}
	}

	render(){
		return (
		<Fragment>
		{
		//下面是一个input框
		}
		{/*下面是一个input框*/}
			<div>
				<label htmlFor='a'>输入内容:</label>
				<input
					id='a'
					className='input'
					value={this.state.inputValue}
					// 绑定TodoList组件
					onChange={this.handleInputChange.bind(this)}
					/>
				<button onClick={this.handleBtnClck.bind(this)}>提交</button>
			</div>
			<ul>
				{
					this.state.list.map((item,index) => {
						console.log("index:"+index)
						console.log("item:"+item)
						return (
							<Fragment>
							<TodoItem 
								index={index}  
								content={item}
								deleteItem={this.handleItemDelete.bind(this)}
							/>
							{/*
							<li 
								key={index} 
								onClick={this.handleItemDelete.bind(this,index)}
								dangerouslySetInnerHTML={{__html:item}}
							>
								{
									//{item}
								}
							</li>
							*/}
							</Fragment>
						)
					})
				}
			</ul>
		</Fragment>
		)
	}

	// 接受event对象 接受输入框信息
	handleInputChange(e){
		// console.log(this) TodoList组件
		// console.log(e.target) 对应的dom元素
		this.setState({
			inputValue:e.target.value
		})
	}
	// 接受按钮点击事件
	handleBtnClck(){
		this.setState({
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		})
	}
	// 接受删除信息时间
	handleItemDelete(index){
		const list = [...this.state.list];
		list.splice(index,1);
		console.log(index);
		this.setState({
			list:list
		})
	}
}

export default TodoList;
