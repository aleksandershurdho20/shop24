import styled from 'styled-components'


export const Wrapper = styled.div`
    padding:50px;
    display:flex;

`
export const ImageContainer = styled.div`
    flex:1;
`
export const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
`
export const Title = styled.h1`

font-weight:200;

`
export const Description = styled.p`
margin:20px 0px;

`
export const Price = styled.span`
font-weight:100;
font-size:40px;

`
export const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;

`


export const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;

`
export const Filter = styled.div`
display:flex;
align-items:center;

`
export const FilterTitle = styled.div`
font-size:20px;
font-weight:200;


`
export const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background:${props => props.color};
margin:0px 5px;
cursor:pointer;
box-shadow: 0px 0px 2px ${props => props.color};


`
export const FilterSize = styled.select`
margin-left:10px;
padding:5px;
background:none;
border:1px solid #d3d3d3;
outline:none; 
`
export const FilterSizeOption = styled.option`


`


export const AddContainer = styled.div`

display:flex;
align-items:center;
width:50%;
justify-content:space-between;


`
export const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;


`
export const Amount = styled.div`
width:30px;
height:30px;
border-radius:10px;
border:1px solid #038787;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;


`
export const Button = styled.button`

padding:15px;
border:2px solid #038787;
background:#FFF;
cursor:pointer;
font-weight:500;
&:hover{
    background:#f8f4f4;
}


`