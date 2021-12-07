import styled from 'styled-components'
import Paper from '@mui/material/Paper';

import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';

export const SupportWrapper = styled(Paper)`

background-color: rgb(255, 255, 255);
color: rgb(43, 52, 69);
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
overflow: hidden;
display: flex;
flex-wrap: wrap;
-webkit-box-align: center;
align-items: center;
border-radius: 10px;
cursor: pointer;
margin-top: 1rem;
margin-bottom: 1rem;
padding: 15px 24px;

& > *{
    flex : 1 1 0px;
}


`

export const TagContainer = styled.div``

export const TagWrapper = styled.div`

display: flex;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
padding-top: 8 px;
margin: -6 px;
`

export const Tag = styled(Chip)`
font-size: 0.8125rem;
display: inline-flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
border-radius: 16px;
white-space: nowrap;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
cursor: default;
outline: 0px;
text-decoration: none;
border: 0px;
padding: 0px 0.25rem;
vertical-align: middle;
box-sizing: border-box;
height: 26px;
background-color: ${props => props.type === 'urgent' ? 'rgb(252, 233, 236)' : 'rgb(231, 249, 237)'};

color: ${props => props.type === 'urgent' ? 'rgb(210, 63, 87)' : 'rgb(51, 208, 103)'};
margin: 6px;

`

export const IssueWrapper = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
padding-top: 8px;
margin: -6px;

`

export const Description = styled.span`
line-height: 1.5;
margin: 6px;
color: rgb(125, 135, 156);
text-transform: none;
white-space: ${props => props.date ? 'pre' : 'normal'};


`

export const IconWithButton = styled(IconButton)`
margin-left:auto;



`