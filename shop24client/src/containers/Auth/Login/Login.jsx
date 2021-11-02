import React from 'react'
import { Container,Form,Input,Wrapper,Title,Button,ButtonLink,LinkWrapper } from './styles'

export default function Login() {
    return (
        <Container>
           <Wrapper>
               <Title>SIGN IN</Title>
               <Form>
                 
                   <Input placeholder="Username"/>

                   <Input placeholder="Password"/>


                    <Button>Login</Button>
                    <LinkWrapper>
                        <ButtonLink to ="/signup">Sign up</ButtonLink>
                        <ButtonLink to="/s" color="#038787">Forgot password?</ButtonLink>
                    </LinkWrapper>

               </Form>
            </Wrapper> 
        </Container>
    )
}
