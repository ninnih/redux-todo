import { 
	ADD_TASK, 
	TOGGLE_TASK, 
	DELETE_TASK, 
	CLEAR_TASK 
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case ADD_TASK:
			return [
				...state, {
						id: payload.id,
						title: payload.title,
						completed: false
					}
				]

		case TOGGLE_TASK:
			const moveTask = (task, index) => {
				if (task.id === payload.id && !task.completed) {
					state.push(state.splice(index, 1)[0]);
				} else if (task.id === payload.id && task.completed) {
					state.splice(index, 1)
					state.unshift(task)
				}
			}		
			state.forEach(moveTask);
		
			return state.map(task =>
				task.id === payload.id ? { 
						...task, 
						completed: !task.completed, 
						time: payload.time 
					} 
						: task
				)

		case DELETE_TASK:
			return state.filter(task => task.id !== payload);

		case CLEAR_TASK:
			return state.filter(task => task.completed !== payload)
		
    default:
			return state;
  }
}

export default rootReducer;
