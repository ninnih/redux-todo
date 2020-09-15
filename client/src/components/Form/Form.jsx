import React from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from '../../js/actions/index';
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
	}
	return (
		<section>
			<form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={input.title}
            onChange={handleChange}
          />
        <button type="submit">SAVE</button>
      </form>
		</section>
	)
}

export default Form;