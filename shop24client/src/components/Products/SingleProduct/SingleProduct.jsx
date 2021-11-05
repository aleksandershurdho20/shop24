

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
export default function SingleProduct({data}) {
    return (
        <Wrapper>
            <ImageContainer>
                <Image src={data.img}/>

            </ImageContainer>
            <InfoContainer>
                    <Title>{data.title}</Title>
                    <Description>
                        {data.description}
                    </Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={data.color}/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>


                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption value={data.size}>{data.size}</FilterSizeOption>
                                {/* <FilterSizeOption>A</FilterSizeOption>
                                <FilterSizeOption>b</FilterSizeOption>
                                <FilterSizeOption>c</FilterSizeOption>
                                <FilterSizeOption>d</FilterSizeOption>
                                <FilterSizeOption>e</FilterSizeOption> */}

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

