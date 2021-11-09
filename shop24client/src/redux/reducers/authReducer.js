
import { LOGIN } from '../types/loginTypes'

const initialState = {
    isLoggedIn: false,
    user: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: true, user: action.payload }
        default: return state
    }

}
export default authReducer