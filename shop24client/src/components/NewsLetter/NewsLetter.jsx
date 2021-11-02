import { Send } from '@mui/icons-material'
import React from 'react'
import {Container,Title,Description,InputContainer,Input,Button} from './styles'
export default function NewsLetter() {
    return (
        <Container>
           <Title>Newsletter</Title>
           <Description>Get timely updates from your favorite products.</Description>
           <InputContainer>
            <Input placeholder="Enter your email "/>
            <Button>
                <Send/>
            </Button>
           </InputContainer>
        </Container>
    )
}
