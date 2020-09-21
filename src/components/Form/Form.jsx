import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../js/actions/index';
import './Form.scss';

import AddIcon from '@material-ui/icons/Add';

const uuid = require('uuid-v4');

export const Form = () => {
	const dispatch = useDispatch();

	const [input, setInput] = React.useState({ 
		title: '',
		id: uuid(),
		complete: false,
		error: ''
	});
 
	const handleChange = e => {
		setInput({
			[e.target.id]: e.target.value,
			id: uuid(),
			complete: false
		})
	}

	const handleSubmit = e => {
		e.preventDefault();

		if(input.title === '') {
			setInput({
				title: '',
				error: 'Please enter a task!'
			})
		} else {
			dispatch(addTask(input))
			setInput({
				title: '',
				error: ''
			})
		}
	}

	return (
		<section className="form">
			<form onSubmit={handleSubmit} className="form__wrapper">
				<label htmlFor="title" className="form__wrapper__title">Daily planner</label>
				<input
					type="text"
					id="title"
					value={input.title}
					onChange={handleChange}
          />
				<h3>{input.error}</h3>
        <button type="submit" className="form__wrapper__button">Add task <AddIcon/></button>
      </form>
		</section>
	)
}

export default Form;