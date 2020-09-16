import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_TODO:
			return [
				...state, {
						id: action.payload.id,
						title: action.payload.title,
						completed: false
					}
				]

		case TOGGLE_TODO:
			return state.map(todo =>
					todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
				)

		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.payload);

    default:
			return state
  }
}

export default rootReducer;
