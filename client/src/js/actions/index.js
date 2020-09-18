import { 
    ADD_TASK, 
    TOGGLE_TASK, 
    DELETE_TASK, 
    CLEAR_TASK, 
} from '../constants/index';

export const addTask= payload => {
    return {
        type: ADD_TASK,
        payload
    }
}

export const toggleTask = payload => {
    return {
        type: TOGGLE_TASK,
        payload
    }
}

export const deleteTask = payload => {
    return {
        type: DELETE_TASK,
        payload
    }
}

export const clearTasks = payload => {
    return {
        type: CLEAR_TASK,
        payload
    }
}
