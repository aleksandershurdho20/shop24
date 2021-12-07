import React, { useState, useEffect } from "react";
import Tags from "components/Tags";
import { useParams } from "react-router-dom";
import { apiInstance } from "utils/api";
import toast from 'react-hot-toast';

export default function UpdateTag() {
    const [tag, setTag] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        apiInstance
            .get("/tag/" + id)
            .then((res) => {
                console.log({ res });
                setTag(res.data.tag.tags);
            })
            .catch((err) => console.log({ err }));
    }, []);
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const tags = [...tag];
        tags[index][name] = value;
        setTag(tags);
    };
    const handleAddMore = () =>{
        const tags = [...tag,{title:""}]
        setTag(tags)
    }
    const handleRemove = (position,index) =>{
        if( position == undefined){
            const tags = [...tag].splice(1,index)
           
            setTag(tags)
        }
        else{
            apiInstance.delete('/tag/'+id+'/tag/'+position).then(res =>{
                toast.success("Tag deleted succesfully!")

                const filteredTags = [...tag].filter(el=>el._id != position)
                setTag(filteredTags)
            }).catch(err => toast.error("Server errorr!"))
        }

    
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        apiInstance.put('/tag/' +id,tag).then((res => {
            console.log({res})
            toast.success("Tag created succesfully!")
        })).catch(err =>toast.error("Server errorr!")
        )
    }
    return (
        <>
            <Tags
                tags={tag}
                handleChange={handleChange}
                title="Update"
                name="title"
                handleRemove={handleRemove}
                handleAddMore={handleAddMore}
                deleteFirstOne={true}
                handleSubmit={handleSubmit}
            />
        </>
    );
}
