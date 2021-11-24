import React from 'react'
import TagsWrapper from 'components/Tags'
import BoxTitle from 'common/BoxTitle'

export default function Tags() {
    const handleChange = (e) =>{
        console.log({e})
    }
    return (
        <>
            <BoxTitle
                title="Tags"
                showInput={true}
                buttonTitle=" Create Tag"
                onChange={handleChange}
                path="tags/create"
            />
        </>
    )
}
