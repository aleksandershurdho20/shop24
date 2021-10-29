import React from 'react'
import { Container } from './styles'
import { categories } from 'utils/categories'
import CategoryItem from './CategoryItem'
export default function Categories() {
    return (
        <Container>
            {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
            ))}
      </Container>
    )
}
