import { GET_ALL_ORDERS, FILTER_SUCCESS, FILTER_FAILTURE } from '../types/orderTypes'


const initialState = {
    orders: []
}


const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ORDERS:
            return { ...state, orders: action.payload }
        case FILTER_SUCCESS:
            return { ...state, orders: action.payload }

        default: return state
    }
}
export default orderReducer