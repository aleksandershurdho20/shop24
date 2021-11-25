import React,{useState} from 'react'
import Tags from 'components/Tags'
import { apiInstance } from 'utils/api'
import toast from 'react-hot-toast';

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
    const handleAddMore = (e) =>{
        e.preventDefault()
        const tag = [...tags,{
            title:""
        }]
        setTags(tag)
    }
    const handleRemove = (id,index) => {
        const tempArr = [...tags].splice(1,index)
        setTags(tempArr)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        apiInstance.post('/create/tags',tags).then((res => {
            console.log({res})
            toast.success("Tag created succesfully!")
        })).catch(err =>toast.error("Server errorr!")
        )
    }
    return (
        <>
            <Tags tags={tags} title="Create" name="title" handleChange={handleChange} handleAddMore={handleAddMore} handleRemove={handleRemove} handleSubmit={handleSubmit}/>
        </>
    )
}
