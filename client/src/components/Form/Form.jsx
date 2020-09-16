import React from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from '../../js/actions/index';
import './Form.scss';

const uuid = require('uuid-v4');

export const Form = () => {
	const [input, setInput] = React.useState({ 
		title: '',
		id: uuid(),
		complete: false
	})
	
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
		dispatch(addArticle(input))
		setInput({title: ''})
	}
	return (
		<section className="form">
			<form onSubmit={handleSubmit} className="form__wrapper">
				<label htmlFor="title" className="form__wrapper__title">
					<h3>Add a task</h3>
				</label>
				<input
					type="text"
					id="title"
					value={input.title}
					onChange={handleChange}
          />
        <button type="submit" className="form__wrapper__button">SAVE</button>
      </form>
		</section>
	)
}

export default Form;