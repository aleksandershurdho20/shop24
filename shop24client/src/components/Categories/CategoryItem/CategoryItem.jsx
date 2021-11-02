import React from 'react'
import {useHistory} from 'react-router-dom'
import { Container,Image,Info,Title,Button } from './styles'
export default function CategoryItem({item}) {
    const history = useHistory()
    const handleOnClick =()=> history.push('/categories')
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
               <Title>{item.title}</Title>
               <Button onClick={handleOnClick}>SHOP NOW</Button>
            </Info>
        </Container>
    )
}
