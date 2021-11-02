import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    padding:20px;
    width:25%;
    background:#FFF;

`
export const Title = styled.h1`
    font-size:24px;

`
export const Form = styled.div`
    display:flex;
    flex-direction:column;
`
export const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
    border:1px solid #d3d3d3;
    outline:none;
    transition: 0.5s ease-in;

    &:hover{
        border:1px solid #038787;

    }
    &:focus{
        border:1px solid #038787;

    }

`

export const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background:#038787;
    color:#FFF;
    cursor:pointer;
    margin:20px 0px;

`
export const ButtonLink = styled(Link)`
    margin:5px;
    font-size:12px;
    text-decoration:none;
    cursor:pointer;
    color:${props => props.color || '#4a4444'}


`

export const LinkWrapper = styled.div`
    margin-top:10px;
`