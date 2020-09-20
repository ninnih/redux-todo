import React from 'react';
import { clearTasks } from '../../js/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Tools.scss';

const Tools = () => {
	const dispatch = useDispatch();
	const articles = useSelector(state => state)
	const completed = articles.filter(task => task.completed)

	const clearDone = () => {
		dispatch(clearTasks(true))
	}

	return (
		<section className="tools">
			<article className="tools__done">
				<button className="tools__button tools__button--done">{completed.length}/{articles.length} done</button>
			</article>
			<article className="toole__done">
				<button className="tools__button" onClick={clearDone}>Clear done<DeleteForeverIcon /></button>
			</article>
		</section>
	)
}

export default Tools;
