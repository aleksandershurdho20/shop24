import React,{useState} from 'react'
import { apiInstance } from 'utils/api'
import { Container,Form,Input,Agreement,Wrapper,Title,Button } from './styles'
import toast from 'react-hot-toast';

export default function SignUp() {
    const [authData,setAuthData]=useState({
        name:'',
        username:'',
        lastname:'',
        email:"",
        password:'',
        confirmPassword:''
    })
    const handleChange = (e) =>{
        const{name,value}=e.target;
        setAuthData({
          ...authData,
          [name]:value  
        })
    }
    const handleSubmit = (e) =>{
        const {confirmPassword,...rest}=authData
        apiInstance.post('/register',rest).then(res => {
            toast.success('Account created succesfully!')

            setAuthData({
                ...authData,
                name:'',
                username:'',
                lastname:'',
                email:"",
                password:'',
                confirmPassword:''
            })
        }).catch(err =>toast.error('Server errorr!'))
    }
    return (
        <Container>
           <Wrapper>
               <Title>CREATE AN ACCOUNT</Title>
               <Form>
                   <Input
                    placeholder="Name"
                    value={authData.name}
                    name="name"
                    onChange={handleChange}
                    />
                   <Input 
                    placeholder="Last Name"
                    value={authData.lastname}
                    name="lastname"
                    onChange={handleChange}
                   />
                   <Input 
                    placeholder="Username"
                    value={authData.username}
                    name="username"
                    onChange={handleChange}
                   
                   />
                   <Input 
                    placeholder="Email"
                    value={authData.email}
                    name="email"
                    onChange={handleChange}
                   
                   
                   />

                   <Input 
                    placeholder="Password"
                    value={authData.password}
                    name="password"
                    onChange={handleChange}
                                   
                   />
                   <Input 
                    placeholder="Confirm Password"
                    value={authData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                   />

                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleSubmit}>Create</Button>
               </Form>
            </Wrapper> 
        </Container>
    )
}
