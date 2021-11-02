import React from 'react'
import {Container,Left,Right,Center,Logo,Description,SocialContainer,SocialIcon,Title,List,ListItem,ContactItem,Payment,Info} from './styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>SHOP24.</Logo>
                <Description>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon  style={{marginRight:"10px"}}/>
                    <Info>	1727 Scenic Way,Springfield</Info>
                </ContactItem>
                <ContactItem>
                    <PhoneIcon  style={{marginRight:"10px"}}/>
                    <Info>+15 069 4564</Info>
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{marginRight:"10px"}}/>
                    <Info>shop24@mail.com</Info>
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

            </Right>
        </Container>
    )
}
