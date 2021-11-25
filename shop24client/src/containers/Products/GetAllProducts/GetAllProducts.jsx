import React,{useState,useEffect,useCallback} from 'react'
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import './index.css'
import Button from '@mui/material/Button';
import { apiInstance } from 'utils/api'
import Loader from 'common/Loader';
import { useHistory } from 'react-router';
import toast from 'react-hot-toast';
import Table from 'common/Table';
import BoxTitle from 'common/BoxTitle';
import useDebounce from 'hooks/useDebounce'
export default function GetAllProducts() {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)
  const [query,setQuery]=useState("")
  const sadsadsa = useDebounce(query,400)
  useEffect(()=>{


    apiInstance.get('/products').then(res => {
 
  
      const parsedArr = res.data.products.map(el => {
        const {_id,...rest}=el
        return {
          ...rest,
          id:el._id
        }
      })
      setProducts(parsedArr)
      setLoading(false)
    })

  },[])
 
  const handleDelete = (e,id) => {
    e.preventDefault()
    setLoading(true)
    apiInstance.delete(`/product/${id}`).then(res => {
      const tempArr = [...products].filter(el=>el.id != id)
      setProducts(tempArr)
      setLoading(false)
      toast.success('Product deleted succesfully!')

    }).catch(err =>toast.error('Server errorr!'))
  

  }
    
      const columns = [
        { field: "title", headerName: "Title", width: 90 },
        {
          field: "image",
          headerName: "Image",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.image} alt="" />
                {/* {params.row.username} */}
              </div>
            );
          },
        },
        { field: "description", headerName: "Description", width: 200 },
        {
          field: "price",
          headerName: "Price",
          width: 120,
        },
        {
          field: "size",
          headerName: "Size",
          width: 160,
        },
        {
          field: "color",
          headerName: "Color",
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
          renderCell: (params) => {
            return (
              <>
                <Link to={"/user/" + params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  onClick={(e)=>handleDelete(e,params.row.id)}
                  className="userListDelete"
                />
              </>
            );
          },
        },
      ];
      const handleChange = (e) =>{
        setQuery(e.target.value)
      }
    return (
        <div className="userList">
            <BoxTitle
            title="Products"
            showInput={true}
            buttonTitle=" Create Product"
            onChange={handleChange}
            path="products/create"
            />
          
            {loading ? <Loader/> :      <Table
                rows={products}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                
                disableColumnMenu
                // components={{
                //     Toolbar: GridToolbar,
                //   }}
                />}
        </div>
    )
}
