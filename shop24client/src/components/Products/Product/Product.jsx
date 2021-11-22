import { FavoriteBorder, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import {Container,Circle,Image,Info,Icon} from './style'
import { Link } from "react-router-dom";
export default function Product({item}) {
    return (
        <Container>
            <Circle/>
            <Image src={item.image}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={{pathname:`/product/${item._id}`,state:item}} style={{color:'#000'}}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}
