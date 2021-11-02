import styled from 'styled-components'

import { mobile } from 'utils/responsive'

export const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}


`

export const Left = styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   padding:20px;
`
export const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "#fff8f8" })}



`
export const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}


`

export const Title = styled.h3`
    margin-bottom:30px;
`
export const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
export const ListItem = styled.li`

    width:50%;
    margin-bottom:10px;
    color:#484343;

`

export const Logo = styled.h1`
    flex:1;

`
export const Description = styled.p`
    margin:20px 0px;
    color:#484343;

`
export const SocialContainer = styled.div`
    display:flex;


`
export const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:#FFF;
    background:#${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;


`

export const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;


`

export const Payment = styled.img`
    width:50%;

`

export const Info = styled.span`
    color:#484343;

`