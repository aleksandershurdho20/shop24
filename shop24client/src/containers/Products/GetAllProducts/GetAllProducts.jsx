import React from 'react'
import { DataGrid ,GridToolbar} from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import './index.css'
import Button from '@mui/material/Button';

import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
export default function GetAllProducts() {
     const data = [
        {
          id: 1,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 2,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 3,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 4,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 5,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 6,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 7,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 8,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 9,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
        {
          id: 10,
          username: "Jon Snow",
          avatar:
            "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "jon@gmail.com",
          status: "active",
          transaction: "$120.00",
        },
      ];
      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
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
                  className="userListDelete"
                />
              </>
            );
          },
        },
      ];
    return (
        <div className="userList">
            <Button variant="outlined" size="medium">
                Create Product
            </Button>
             <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableColumnMenu
                components={{
                    Toolbar: GridToolbar,
                  }}
                />
        </div>
    )
}
