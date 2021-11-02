import React from 'react'
import CartItems from 'components/Cart'
import Navbar from 'components/Navbar'
import BreadCrumb from 'components/BreadCrumb'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function Cart() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" >
          Home
        </Link>,
      
        <Typography key="3" color="text.primary">
          Cart
        </Typography>,
      ];
    return (
        <div>
            <Navbar/>
            <BreadCrumb breadcrumbs={breadcrumbs}/>
            <CartItems/>
        </div>
    )
}
