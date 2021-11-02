

import { Add,Remove } from '@mui/icons-material';
import React from 'react'
import {
    Wrapper,
    ImageContainer,
    InfoContainer,
    Title,
    Image,
    Description,
    Price,
    FilterContainer,
    Filter,
    FilterSize,
    FilterColor,
    FilterSizeOption,
    FilterTitle,
    AddContainer,
    AmountContainer,
    Amount,
    Button
    
  } from "./styles";
export default function SingleProduct() {
    return (
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />

            </ImageContainer>
            <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>


                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>A</FilterSizeOption>
                                <FilterSizeOption>b</FilterSizeOption>
                                <FilterSizeOption>c</FilterSizeOption>
                                <FilterSizeOption>d</FilterSizeOption>
                                <FilterSizeOption>e</FilterSizeOption>

                            </FilterSize>


                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
            </InfoContainer>

        </Wrapper>
    )
}

