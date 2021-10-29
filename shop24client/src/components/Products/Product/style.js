import styled from 'styled-components'

export const Info = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    transition:all 0.5s ease;
    cursor:pointer;


`
export const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
`

export const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background:#FFF;
    position:absolute;


`
export const Image = styled.img`
    height:75%;
    z-index:2;

`

export const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background:#FFF;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1)
    }


`