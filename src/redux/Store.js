import {createStore} from 'redux';
import Reducer from './Reducer';

let store = createStore(Reducer);

export default store;

// let unsubscribe = store.subscribe(() => console.log(store.getState()));

// // dispatch ， 用于分发action
// store.dispatch({ type: ActionTypes.CHANGE_NAME });
// store.dispatch({ type: ActionTypes.CHANGE_PASSWORD, payload: 'Modified b' });
//
// // Stop listening to state updates
// unsubscribe();