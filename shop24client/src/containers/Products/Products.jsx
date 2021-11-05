import React,{useState,useEffect} from 'react'
import Navbar from 'components/Navbar'
import {Container,FilterContainer,Filter,Title,FilterText,Select,Option} from './styles'
import colors from 'utils/FIlterColors'
import sizes from 'utils/FIlterSizes'
import Product from 'components/Products'
import { useLocation } from "react-router";
import { apiInstance } from 'utils/api'

export default function Products() {
    const location = useLocation();
    const [products,setProducts]=useState([])
    const category = location.pathname.split("/")[2]
    const [filters,setFilters]=useState("")
    useEffect(()=>{
        let url=`products/categories/?category=${category}`;
        if(category.startsWith("New")){
            url = 'products?new=true'
        }
        else{
            url=`products/categories/?category=${category}`
        }
    
        apiInstance.get(url).then(res =>setProducts(res.data.products))
    },[category])


    const handleFilterChange = (e) =>{
        setFilters(e.target.value)
    }
    useEffect(()=>{
        const filteredArr = [...products].filter(el => {
            return Object.values(el).includes(filters)
        })
        setProducts(filteredArr)
    },[filters])


    return (
        <Container>
         <Navbar/>
         <Title>{category.charAt(0).toUpperCase() + category.slice(1)} </Title>
         <FilterContainer>
            <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select onChange={handleFilterChange}>
                    {colors.map((el,index) => <Option value={el.value} key={index}>{el.label}</Option>)}
                </Select>
                <Select onChange={handleFilterChange}>
                    {sizes.map((el,index) => <Option value={el.value} key={index}>{el.label}</Option>)}
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products :</FilterText>
                <Select onChange={handleFilterChange}>
                    <Option >Newest</Option>
                    <Option >Price (asc)</Option>
                    <Option >Price (desc)</Option>

                </Select>
            </Filter>
         </FilterContainer>
         <Product products={products}/>
        </Container>
    )
}
