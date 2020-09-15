import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/index';

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
    console.log(payload)
    return {
        type: DELETE_TODO,
        payload
    }
}
