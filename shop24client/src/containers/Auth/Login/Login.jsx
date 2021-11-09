import React,{useState} from 'react'
import { Container,Form,Input,Wrapper,Title,Button,ButtonLink,LinkWrapper } from './styles'
import {loginUser} from 'redux/actions/authAction'
import { useDispatch } from 'react-redux'
export default function Login() {
    const [auth,setAuth]=useState({
        email:'',
        password:''
    })
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        const{name,value}=e.target
        setAuth({
            ...auth,
            [name]:value
        }) 
    }
    const handleSubmit = (e) =>{
        console.log({auth})
        dispatch(loginUser(auth))
    }
    return (
        <Container>
           <Wrapper>
               <Title>SIGN IN</Title>
               <Form>
                 
                   <Input placeholder="Email" value ={auth.email} onChange={handleChange} name="email"/>

                   <Input placeholder="Password" value ={auth.password} onChange={handleChange} name="password"/>


                    <Button onClick={handleSubmit}>Login</Button>
                    <LinkWrapper>
                        <ButtonLink to ="/signup">Sign up</ButtonLink>
                        <ButtonLink to="/s" color="#038787">Forgot password?</ButtonLink>
                    </LinkWrapper>

               </Form>
            </Wrapper> 
        </Container>
    )
}
