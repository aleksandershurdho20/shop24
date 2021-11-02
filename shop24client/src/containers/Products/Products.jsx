import React from 'react'
import Navbar from 'components/Navbar'
import {Container,FilterContainer,Filter,Title,FilterText,Select,Option} from './styles'
import colors from 'utils/FIlterColors'
import sizes from 'utils/FIlterSizes'
import Product from 'components/Products'
export default function Products() {
    return (
        <Container>
         <Navbar/>
         <Title>Dressess </Title>
         <FilterContainer>
            <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select>
                    {colors.map((el,index) => <Option value={el.value} key={index}>{el.label}</Option>)}
                </Select>
                <Select>
                    {sizes.map((el,index) => <Option value={el.value} key={index}>{el.label}</Option>)}
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products :</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option selected>Price (asc)</Option>
                    <Option selected>Price (desc)</Option>

                </Select>
            </Filter>
         </FilterContainer>
         <Product/>
        </Container>
    )
}
