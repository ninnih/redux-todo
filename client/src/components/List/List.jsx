import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../js/actions/index';

const List = () => {
	const articles = useSelector(state => state)
	const dispatch = useDispatch()
	console.log(articles)

	const toggle = (e) => {
		e.preventDefault()
		dispatch(toggleTodo(e.target.id))
	}

	const deleteArticle = (e) => {
		dispatch(deleteTodo(e.target.className))
	}

	return(
		<ul>
		{articles ? articles.map(item => (
			<article className="todoitem">
				<li key={item.id} id={item.id} className="todoitem__text" onClick={toggle}>{item.title}</li>
				<button className={item.id} id="todo__button" onClick={deleteArticle}>X</button>
			</article>
				)
			)
			: null}
		</ul>
	)
}

export default List;
