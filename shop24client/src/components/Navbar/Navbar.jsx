import { Search,ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Container ,Wrapper,Left,Right,Center,Language,SearchContainer,Input,Logo,MenuItem} from './styles'
import Badge from '@mui/material/Badge';
import Annoucement from 'components/Annoucement'
import { useHistory } from 'react-router';
export default function Navbar() {
    const history = useHistory()
    const handleRouteChange = (name) =>{
        history.push(name)
    }
    return (

        <>
            <Annoucement/>  
                <Container>
                    <Wrapper>
                      <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                        </SearchContainer>
                      </Left>
                        <Center onClick={()=>handleRouteChange('/')}>
                            <Logo>SHOP24.</Logo>
                        </Center>
                        <Right>
                            <MenuItem onClick={()=>handleRouteChange('/signup')}>REGISTER</MenuItem>
                            <MenuItem onClick={()=>handleRouteChange('/login')}>SIGN IN</MenuItem>
                            <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                            </MenuItem>
                        </Right>
                    </Wrapper>
            </Container>
        </>
       
    )
}
