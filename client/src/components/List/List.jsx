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
		<>
			<section className="list list--labels">
				<article className="list__column list__column--title">
					<h3>Task</h3>
				</article>
				<article className="list__column list__column--item">
					<h3>Remove</h3>
				</article>
			</section>
			<ul className="list">
			{articles ? articles.map(item => (
				<article className="list__item list list--labels" key={item.id} id={item.id} onClick={toggle}>
					<li className="list__item__text list__column"><CheckCircleIcon className={`list__item__icon list__item__icon--${item.completed}`} />{item.title}</li>
					<article className="list__item__icon list__column" onClick={deleteArticle}><CancelIcon onClick={deleteArticle} id={item.id} className="list__item__icon list__item__icon--close" /></article>
				</article>
					)
				)
				: null}
			</ul>
		</>
	)
}

export default List;
