import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTask, deleteTask, clearTasks } from '../../js/actions/index';

import './List.scss'

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const List = () => {
	const articles = useSelector(state => state)
	const dispatch = useDispatch()

	const completed = articles.filter(task => task.completed)

	const currentTime = () => {
		const current = new Date(); 
		const h = current.getHours();
		let m = current.getMinutes(); 
		let s = current.getSeconds(); 

		if(m < 10){
			m = `0${s}`
		}

		if(s < 10){
			s = `0${s}`
		}

		return `${h}:${m}:${s}`
	}

	const toggleDone = e => {
		dispatch(toggleTask({
			id: e.target.id,
			time: currentTime()
		}))
	}

	const deleteArticle = e => {
		dispatch(deleteTask(e.target.id))
	}

	const clearDone = () => {
		dispatch(clearTasks(true))
	}

	return(
		<section>
			<section className="list list--labels">
				<article className="list__column list__column--title">
					<button className="tools__button tools__button--done">{completed.length}/{articles.length} done</button>
				</article>
				<article className="list__column list__column--item">
					<button className="tools__button" onClick={clearDone}>Clear done<DeleteForeverIcon /></button>
				</article>
			</section>
			<ul className="list">
			{ articles ? 
			articles.map(item => (
				<li 
					className={`list__item list__item--${item.completed} list list--labels`} 
					key={item.id} 
					id={item.id} 
					onClick={toggleDone}>
					<article className="list__item__task">
						<article className={`list__item__task__text list__item__task__text--${item.completed} list__column`}>
							<CheckCircleIcon className={`list__item__icon list__item__icon--${item.completed}`} />
							{item.title}
						</article>
					</article>
					<article 
						id={item.id} 
						className="list__item__icon list__column" 
						onClick={deleteArticle}>
						<CancelIcon id={item.id} className="list__item__icon list__item__icon--close" />
					</article>
					{item.completed ? <h4 className="list__item__time"><AccessTimeIcon/>{item.time}</h4> : null}
				</li>
					)
				)
				: null}
			</ul>
		</section>
	)
}

export default List;
