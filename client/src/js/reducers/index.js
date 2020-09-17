import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_TODO, MOVE_TODO } from '../constants/index';

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
					todo.id === action.payload.id ? { 
						...todo, 
						completed: !todo.completed, 
						time: action.payload.time 
					} 
						: todo
				)

		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.payload);

		case CLEAR_TODO:
			return state.filter(todo => todo.completed !== action.payload)
		
		// case MOVE_TODO:
		// 	return state.push(state.splice(action.payload, 1)[0]);

    default:
			return state;
  }
}

export default rootReducer;
