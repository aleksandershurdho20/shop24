import styled from 'styled-components'
import { mobile } from 'utils/responsive'

export const Container = styled.div``
export const Wrapper = styled.div`
padding:20px;
${mobile({ padding: "10px" })}


`
export const Title = styled.h1`
font-weight:300;
text-align:center;

`
export const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;

`
export const TopButton = styled.button`
padding:10px;
font-weight:600;
border:${props => props.type === 'filled' && "none"};
background:${props => props.type === 'filled' ? "#000" : 'transparent'};
color:${props => props.type === 'filled' && "#FFF"};





`
export const TopTexts = styled.div`
${mobile({ display: "none" })}

`
export const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;

`

export const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}


`
export const Info = styled.div`
flex:3;

`
export const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
export const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}

`
export const ProductDetail = styled.div`
flex:2;
display:flex;

`
export const Image = styled.img`
width:200px;
`
export const PriceDetail = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;



`
export const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;

`
export const ProductName = styled.div`

`
export const ProductId = styled.div`

`
export const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background:${props => props.color}

`
export const ProductSize = styled.div`

`

export const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
export const ProductAmount = styled.div`
font-size:24px;
margin: 5px;

${mobile({ margin: "5px 15px" })}


`
export const ProductPrice = styled.div`

font-size:30px;
font-weight:200;
${mobile({ marginBottom: "20px" })}

`
export const HR = styled.hr`
background:#eee;
border:none;
height:1px;

`
export const SummaryTitle = styled.h1`
font-weight:200;

`
export const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props => props.type === 'total' && "500"};
font-size:${props => props.type === 'total' && "24px"};


`
export const SummaryItemPrice = styled.span`


`
export const SummaryItemText = styled.span`


`

export const Button = styled.button`
width:100%;
padding:10px;
background:#000;
color:#FFF;
cursor:pointer;

`


export const Empty = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;



`


export const ImageEmpty = styled.img`


width: 30%;
${mobile({ width: "100%" })}

`


export const EmptyDescripton = styled.p`
opacity: 0.6;
margin-bottom: 50px;


}


`