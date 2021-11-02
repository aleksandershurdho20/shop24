import React from 'react'
import { Container,Form,Input,Agreement,Wrapper,Title,Button } from './styles'
export default function SignUp() {
    return (
        <Container>
           <Wrapper>
               <Title>CREATE AN ACCOUNT</Title>
               <Form>
                   <Input placeholder="Name"/>
                   <Input placeholder="Last Name"/>
                   <Input placeholder="Username"/>
                   <Input placeholder="Email"/>

                   <Input placeholder="Password"/>
                   <Input placeholder="Confirm Password"/>

                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
               </Form>
            </Wrapper> 
        </Container>
    )
}
