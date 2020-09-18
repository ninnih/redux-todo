import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTask, deleteTask } from '../../js/actions/index';

import './List.scss'

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const List = () => {
	const articles = useSelector(state => state)
	const dispatch = useDispatch()

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

	return(
		<section className="section">
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
