import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_TODO, MOVE_TODO } from '../constants/index';

export const addArticle = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const toggleTodo = payload => {

    return {
        type: TOGGLE_TODO,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const clearTodos = payload => {
    return {
        type: CLEAR_TODO,
        payload
    }
}

// export const moveTodo = payload => {
//     return {
//         type: MOVE_TODO,
//         payload
//     }
// }
