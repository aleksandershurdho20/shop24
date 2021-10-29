import React from 'react'
import {products} from 'utils/products'
import Product from './Product'
import {Container} from './style'
export default function Products() {
    return (
        <Container>
            {products.map((item) => (
            <Product item={item} key={item.id} />
            ))}
      </Container>
    )
}
