import React,{useState,useEffect} from 'react'
import Navbar from 'components/Navbar'
import Slider from 'components/Slider'
import Categories from 'components/Categories'
import Products from 'components/Products'
import NewsLetter from 'components/NewsLetter'
import Footer from 'components/Footer'
import { apiInstance } from 'utils/api'
export default function Home() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
    
        apiInstance.get('/products').then(res =>setProducts(res.data.products.slice(0,8)))
    },[])
    return (
        <>
           <Navbar/> 
           <Slider/>
           <Categories/>
           <Products products={products}/>
           <NewsLetter/>
           <Footer/>
        </>
    )
}
