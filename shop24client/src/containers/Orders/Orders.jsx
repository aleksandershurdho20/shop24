import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import {getAllOrders} from 'redux/actions/orderAction'
import FilterOrders from 'components/Orders/FilterOrders/FilterOrders'
export default function Orders() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
    return (
        <div>
            <FilterOrders/>
        </div>
    )
}
