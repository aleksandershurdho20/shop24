import { LOGIN, START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILTURE, STOP_LOGIN } from '../types/loginTypes'
import { apiInstance } from 'utils/api'
import toast from 'react-hot-toast';



export const loginUser = (params) => async dispatch => {

    try {

        dispatch({
            type: START_LOGIN
        })
        const { data } = await apiInstance.post('/login', params)
        localStorage.setItem("user", JSON.stringify(data))
        dispatch({
            type: LOGIN_SUCCESS
        })
        dispatch({
            type: LOGIN,
            payload: data
        })
        dispatch({
            type: STOP_LOGIN
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAILTURE
        })
        dispatch({
            type: STOP_LOGIN
        })
        toast.error(error.response.data)

    }
}