import React from 'react'
import Navbar from 'components/Navbar'
import Slider from 'components/Slider'
import Categories from 'components/Categories'
import Products from 'components/Products'
export default function Home() {
    return (
        <>
           <Navbar/> 
           <Slider/>
           <Categories/>
           <Products/>
        </>
    )
}
