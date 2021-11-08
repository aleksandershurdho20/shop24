import { ADD_TO_CART } from '../types/cartTypes'
const initialState = {
    cart: [],
    total: 0,
    quantity: 0
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: return {
            ...state,
            cart: [...state.cart, action.payload],

            quantity: state.quantity + 1,
            total: state.total + action.payload.price * action.payload.quantity,

        }

        // case ADD_TO_CART: console.log(action.payload.quantity, 'action.payload.price')

        default: return state

    }

}



export default cartReducer