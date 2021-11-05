import React from 'react'
import Navbar from 'components/Navbar'
import SingleProductData from 'components/Products/SingleProduct'
import BreadCrumb from 'components/BreadCrumb';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function SingleProduct(props) {
  const data = props.location.state

      const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" to="/" >
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          to="/products/new"
        >
          Products
        </Link>,
        <Typography key="3" color="text.primary">
          {data.title}
        </Typography>,
      ];
    return (
        <div>
            <Navbar/>
            <BreadCrumb breadcrumbs={breadcrumbs}/>
            <SingleProductData data={data}/>
        </div>
    )
}
