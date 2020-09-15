import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../js/actions/index';
import './List.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const List = () => {
	const articles = useSelector(state => state)
	const dispatch = useDispatch()

	const toggle = (e) => {
		e.preventDefault()
		dispatch(toggleTodo(e.target.id))
	}

	const deleteArticle = (e) => {
		dispatch(deleteTodo(e.target.id))
	}

	return(
		<ul className="list">
		{articles ? articles.map(item => (
			<article className="list__item" key={item.id} id={item.id} onClick={toggle}>
				<li className="list__item__text" >{item.title}</li>
				<article className="list__item__icon"><CheckCircleIcon className={`list__item__icon list__item__icon--${item.completed}`} /><CancelIcon id={item.id} className="list__item__icon list__item__icon--close" onClick={deleteArticle}/></article>
			</article>
				)
			)
			: null}
		</ul>
	)
}

export default List;
