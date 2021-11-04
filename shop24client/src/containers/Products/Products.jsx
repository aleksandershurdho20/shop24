import React,{useState,useEffect} from 'react'
import Navbar from 'components/Navbar'
import {Container,FilterContainer,Filter,Title,FilterText,Select,Option} from './styles'
import colors from 'utils/FIlterColors'
import sizes from 'utils/FIlterSizes'
import Product from 'components/Products'
import { useLocation } from "react-router";
import axios from 'axios'
export default function Products() {
    const location = useLocation();
    const [products,setProducts]=useState([])
    const category = location.pathname.split("/")[2]
    useEffect(()=>{
        const BASE_URL = `http://localhost:5000/api/products/categories/?category=${category}`
        axios.get(BASE_URL).then(res =>setProducts(res.data.products))
    },[])
    return (
        <Container>
         <Navbar/>
         <Title>{category.charAt(0).toUpperCase() + category.slice(1)} </Title>
         <FilterContainer>
            <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select>
                    {colors.map((el,index) => <Option value={el.value} key={index}>{el.label}</Option>)}
                </Select>
                <Select>
                    {sizes.map((el,index) => <Option value={el.value} key={index}>{el.label}</Option>)}
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products :</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option selected>Price (asc)</Option>
                    <Option selected>Price (desc)</Option>

                </Select>
            </Filter>
         </FilterContainer>
         <Product products={products}/>
        </Container>
    )
}
