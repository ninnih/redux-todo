import React from 'react';
import { useDispatch } from 'react-redux'
import { clearTodos } from '../../js/actions/index';

import './Tools.scss';

const Tools = () => {
	const dispatch = useDispatch()

	const clearDone = () => {
		dispatch(clearTodos(true))
	}

	return (
		<section className="tools">
			<button className="tools__button" onClick={clearDone}>Clear done</button>
		</section>
	)
}

export default Tools;