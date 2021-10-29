import React,{useState} from 'react'
import { Container,Arrow,Wrapper,Slide,ImgContainer,InfoContainer,Image,Title,Description,Button } from './styles'
import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material'
import {slider} from 'utils/slider'
export default function Slider() {
    const [slideIndex,setSlideIndex]=useState(0)
    const handleClick = (direction) =>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1:2)
        }else{
            setSlideIndex(slideIndex < 2? slideIndex +1:slideIndex)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slider.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                        <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right"  onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
