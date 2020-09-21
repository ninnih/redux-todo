import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearTasks } from '../../js/actions/index';

import './Tools.scss';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Tools = () => {
	const articles = useSelector(state => state);
	const completed = articles.filter(task => task.completed);
	const dispatch = useDispatch();

	const clearDone = () => {
		dispatch(clearTasks(true));
	}

	return (
		<section className="section">
			<section className="tools">
				<article className="tools__done">
					<button className="tools__button tools__button--done">{completed.length}/{articles.length} done</button>
					<button className="tools__button tools__button--clear" onClick={clearDone}>Clear done<DeleteForeverIcon /></button>
				</article>
			</section>
		</section>
	)
}

export default Tools;
