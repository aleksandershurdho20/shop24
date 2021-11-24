import React,{useState} from 'react'
import Tags from 'components/Tags'
export default function CreateTag() {
    const [tags,setTags]=useState([{
        title:""
    }])
    const handleChange = (e,index) =>{
        const{name,value}=e.target
        const tag = [...tags]
        tag[index][name]=value
        setTags(tag)
    }

    return (
        <>
            <Tags tags={tags} title="Create" name="title" handleChange={handleChange}/>
        </>
    )
}
