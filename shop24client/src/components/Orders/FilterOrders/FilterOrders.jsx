import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {filterOrders} from 'redux/actions/orderAction'
export default function FilterOrders() {
    const [status,setStatus]=useState('pending')
    const dispatch = useDispatch()
    const {orders}= useSelector((state)=>state.OrderReducer)
    console.log({orders})
    const handleChange = (event, newValue) => {
        setStatus(newValue);
      };
      useEffect(()=>{
        const filteredOrders = orders.filter(el => el.status.includes(status))
        dispatch(filterOrders(filteredOrders))
      },[status])
      {console.log({status})}
    return (
        <div>
         FilterOrders
         <Tabs
        value={status}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="pending" label="Pending" />
        <Tab value="canceled" label="Item Two" />
        <Tab value="delivered" label="Item Three" />
      </Tabs>
        </div>
    )
}
