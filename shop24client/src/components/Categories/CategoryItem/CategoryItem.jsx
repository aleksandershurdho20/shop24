import React from 'react'
import { Container,Image,Info,Title,Button } from './styles'
export default function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
               <Title>{item.title}</Title>
               <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}
