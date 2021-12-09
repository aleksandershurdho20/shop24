import { GET_ALL_ORDERS, START_ALL_ORDERS, GET_ALL_ORDERS_SUCCESS, ALL_ORDERS_FAILTURE, STOP_ALL_ORDERS, START_FILTER, FILTER_SUCCESS, FILTER_FAILTURE, STOP_FILTER } from '../types/orderTypes'
import { apiInstance } from 'utils/api'

export const getAllOrders = () => async dispatch => {

    try {
        dispatch({
            type: START_ALL_ORDERS
        })
        const { data } = await apiInstance.get('/orders')
        dispatch({
            type: GET_ALL_ORDERS,
            payload: data.orders
        })
        dispatch({
            type: GET_ALL_ORDERS_SUCCESS
        })
        dispatch({
            type: STOP_ALL_ORDERS
        })

    } catch (error) {
        dispatch({
            type: ALL_ORDERS_FAILTURE
        })
    }

}

export const filterOrders = (data) => dispatch => {

    dispatch({
        type: START_FILTER
    })
    dispatch({
        type: FILTER_SUCCESS,
        payload: data
    })
    dispatch({
        type: FILTER_FAILTURE,
        payload: data
    })
    dispatch({
        type: STOP_FILTER,
    })

}