import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { saveState, loadState } from '../localStorage'

const store = createStore(rootReducer, loadState())

store.subscribe(() => {
	console.log(store.getState().todos)
	console.log(store.getState())
  saveState(
    store.getState()
  )
})

// const store = createStore(rootReducer);

export default store;
