import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import {getAllOrders} from 'redux/actions/orderAction'
import FilterOrders from 'components/Orders/FilterOrders/FilterOrders'
import { useSelector } from 'react-redux'
import Table from 'common/Table'
export default function Orders() {
    const dispatch = useDispatch()
    const {orders}= useSelector((state)=>state.OrderReducer)
    const [status,setStatus]=useState("pending")
    useEffect(()=>{
        dispatch(getAllOrders())
    },[])
    const handleTabChange =(e,value) =>{
      setStatus(value)
    }
    const columns = [
        { field: "_id", headerName: "Id", width: 90 },
     
        { field: "amount", headerName: "Amount", width: 200 },
        {
          field: "adress",
          headerName: "Adress",
          width: 120,
        },
        {
          field: "status",
          headerName: "Status",
          width: 160,
        },
        {
          field: "createdAt",
          headerName: "Created At",
          width: 160,
        },
      
        {
          field: "action",
          headerName: "Action",
          width: 150,
        }
    
      ];
    return (
        <div>
            <FilterOrders handleTabChange={handleTabChange} status={status}/>
            {orders.filter(el=>el.status.toLowerCase() == status.toLocaleLowerCase()).map(data=><p>{data.status}</p>)}
        </div>
    )
}
