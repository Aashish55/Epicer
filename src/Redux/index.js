import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import recipeReducer from './Reducer/Reducer'

const store = createStore(recipeReducer, composeWithDevTools());

export default store;