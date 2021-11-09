import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import CartReducer from './reducers/cartReducer'
import AuthReducer from './reducers/authReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    CartReducer,
    AuthReducer
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store