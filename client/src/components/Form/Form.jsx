import React from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from '../../js/actions/index';


export const Form = () => {
	const [input, setInput] = React.useState({ 
		title: '' 
	})
	const dispatch = useDispatch()

	const handleChange = e => {
		setInput({
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addArticle(input))
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={input.title}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
		</div>
	)
}

export default Form;