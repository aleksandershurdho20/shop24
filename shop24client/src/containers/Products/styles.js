import styled from 'styled-components'
import { mobile } from 'utils/responsive'

export const Container = styled.div`



`
export const FilterContainer = styled.div`
display:flex;
justify-content:space-between;



`
export const Filter = styled.div`
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}




`
export const Title = styled.h1`
 margin:20px;


`
export const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({ marginRight: "0px" })}


`
export const Select = styled.select`
padding:10px;
margin-right:20px;
background:none;
border:1px solid #d3d3d3;
outline:none;  
${mobile({ margin: "10px 0px" })}

`
export const Option = styled.option``

