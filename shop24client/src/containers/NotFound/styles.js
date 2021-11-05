import styled from 'styled-components'

import { mobile } from 'utils/responsive'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fbfbfb;
height: 100vh;
flex-direction:column;
}


`

export const Image = styled.img`

width: 30%;
${mobile({ width: "100%" })}

`


export const Button = styled.button`
padding:10px 15px;
background:#FFF;
border:2px solid #038787;
color: #038787;
cursor:pointer;



`