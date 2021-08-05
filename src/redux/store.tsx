import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducedcks';

const rootReducer = combineReducers({
	faboritos:reducer
})


const composeEnhancers =  compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}
