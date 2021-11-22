

import { Add,Remove } from '@mui/icons-material';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
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
    const [quantity,setQuantity]=useState(1)
    const dispatch = useDispatch()
    const handleQuantity = (type) =>{
        if(type == 'decrement'){
          quantity >1 && setQuantity(quantity -1)
        }
        else{
          setQuantity(quantity +1)

        }
    }
    const handleCart = () =>{
        dispatch({
            type:'ADD_TO_CART',
            payload:{...data,quantity}
        })
    }
    return (
        <Wrapper>
            <ImageContainer>
                <Image src={data.image}/>
            </ImageContainer>
            <InfoContainer>
                    <Title>{data.title}</Title>
                    <Description>
                        {data.description}
                    </Description>
                    <Price>{data.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {data.color.length > 0 ? data.color.map(el => <FilterColor color ={el}/>): <FilterColor color ={data.color[0]}/>}
                       


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
                            <Remove onClick={()=>handleQuantity("decrement")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("increment")}/>
                                
                        </AmountContainer>
                        <Button onClick={handleCart}>ADD TO CART</Button>
                    </AddContainer>
            </InfoContainer>

        </Wrapper>
    )
}

