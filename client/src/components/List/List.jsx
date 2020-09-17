import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../js/actions/index';
import './List.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const List = () => {
	const articles = useSelector(state => state)
	const dispatch = useDispatch()
	console.log(articles)

	const currentTime = () => {
		const current = new Date(); 
		const h = current.getHours();
		const m = current.getMinutes(); 
		const s = current.getSeconds(); 

		return `${h}:${m}:${s}`
	}

	const toggle = e => {
		dispatch(toggleTodo({
			id: e.target.id,
			time: currentTime()
		}))
	}
	
	// const move = (index) => {
	// 	console.log(index)
	// 	if(index) {
	// 		articles.push(articles.splice(index, 1)[0]);
	// 	} 
	// }

	// const iterate = (item, index) => {
	// 	if(item.completed) {
	// 		move(index)
	// 	}
	// }
	// articles.forEach(iterate);

	const deleteArticle = e => {
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
			<article className={`list__item list__item--${item.completed} list list--labels`} key={item.id} id={item.id} onClick={toggle}>
					<li>
						<article className={`list__item__text list__item__text--${item.completed} list__column`}>
							<CheckCircleIcon className={`list__item__icon list__item__icon--${item.completed}`} />
							{item.title}
						</article>
					</li>
					<article id={item.id} className="list__item__icon list__column" onClick={deleteArticle}>
						<CancelIcon id={item.id} className="list__item__icon list__item__icon--close" />
					</article>
					{item.completed ? <h4 className="list__item__time">Finished at: {item.time}</h4> : null}
				</article>
					)
				)
				: null}
			</ul>
		</>
	)
}

export default List;
