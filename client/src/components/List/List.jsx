import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../../js/actions/index';

const List = () => {
const articles = useSelector(state => state)
const dispatch = useDispatch()
console.log(articles)

const toggle = (e) => {
	e.preventDefault()
	dispatch(toggleTodo(e.target.id))
}
	return(
		<ul>
		{articles ? articles.map(item => (
			<li key={item.id} id={item.id} onClick={toggle}>{item.title}</li>
				)
			)
			: null}
		</ul>
	)
}

export default List;
