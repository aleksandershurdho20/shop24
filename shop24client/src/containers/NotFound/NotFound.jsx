import React from 'react'
import Empty from 'assets/404.png'
import {Container,Image,Button} from './styles'
export default function NotFound(props) {
    return (
        <Container>
           <Image src={Empty}/> 
           <Button onClick={()=>props.history.goBack()}>Go back</Button>
        </Container>
    )
}
