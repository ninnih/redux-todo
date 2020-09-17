import React from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from '../../js/actions/index';
import './Form.scss';

const uuid = require('uuid-v4');

export const Form = () => {
	const [input, setInput] = React.useState({ 
		title: '',
		id: uuid(),
		complete: false,
		error: ''
	})
	console.log(input)
	const dispatch = useDispatch()
 
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
			dispatch(addArticle(input))
			setInput({
				title: '',
				error: ''
		})
		}
	}

	return (
		<section className="form">
			<form onSubmit={handleSubmit} className="form__wrapper">
				<label htmlFor="title" className="form__wrapper__title">
					Day planner
				</label>
				<input
					type="text"
					id="title"
					value={input.title}
					onChange={handleChange}
          />
				<h3>{input.error}</h3>
        <button type="submit" className="form__wrapper__button">Add task</button>
      </form>
		</section>
	)
}

export default Form;