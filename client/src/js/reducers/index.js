import { ADD_TODO, TOGGLE_TODO } from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
	console.log(action)
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
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

// 	if(action.type === ADD_TODO) {
// 		console.log(action.payload)
// 		return {...state, articles: state.articles.concat(action.payload)}
// 	}

// 	if(action.type === TOGGLE_TODO) {
// 		return state.articles.map(item => {
// 			if(item.id !== action.payload) {
// 				return state;
// 			}
// 			return {
// 				...state, 
// 				complete: !state.complete
// 			}
// 		}) 
// 	}
// 		return state;
// }

export default rootReducer;
