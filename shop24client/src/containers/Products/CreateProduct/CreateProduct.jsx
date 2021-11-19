import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import {PaperWrapper} from './styles.js'
import Input from 'common/Input/Input.jsx';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {DropzoneArea} from 'material-ui-dropzone'
import MultiSelect from 'common/MultiSelect'
import FIlterSizes from 'utils/FIlterSizes.js';
import FIlterColors from 'utils/FIlterColors.js';
import Button from '@mui/material/Button';
import { apiInstance } from 'utils/api.js';
import toast from 'react-hot-toast';

export default function CreateProduct() {
const [product,setProduct]=useState({
    title:'',
    description:'',
    price:[],
    image:'',
    categories:[],
    size:[],
    color:[],
    inStock:true,


})
const handleChange = (e) =>{
    const {target: { value,name },} = e;
    setProduct({...product,[name]:value}) 
}
const handleMultipleValuesChange = (e) =>{
    const {target: { value,name },} = e;
      console.log({value,name})
    setProduct({...product,[name]:typeof value === 'string' ? value.split(',') : value}) 
}

const categories = [{
    label:'Man',
    value:"man"
},
{
    label:'Woman',
    value:"woman"
},
{
    label:'Electronics',
    value:"electornics"
},
{
    label:'Tools',
    value:"tools"
},
]

const handleSubmit = (e) =>{
    console.log({product})
    apiInstance.post('/create/product',product).then(()=>toast.success('Product Created Sucessfully!')).catch(err => toast.error("An errorr happened! Please try again!"))
}
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <PaperWrapper elevation={0}>
                    <Grid container spacing={1}>

                        <Grid item md={12}>
                            <Input variant="outlined" value={product.title} name="title" onChange={handleChange} placeholder="Please Enter Product Title" label="Title" fullWidth />

                        </Grid>

                        

                        <Grid item md={12}>
                            <Input variant="outlined" value={product.description} name="description" onChange={handleChange} label ="Description" placeholder="Description" multiline fullWidth />

                        </Grid>
                        <Grid item md={12}>
                            <Input variant="outlined" value={product.price} name="price" onChange={handleChange} placeholder="Price" label ="Price" type="number" fullWidth />
                        </Grid>
                        <Grid item md={12}>
                            <DropzoneArea  accept="image/*" value = {product.image} onDrop={(value) => setProduct({...product,image:value[0]?.name})}/>
                        </Grid>
                    </Grid>

                </PaperWrapper>
            </Grid>
            <Grid item md={4}>
                <PaperWrapper>
                    <Grid container spacing={1}>

                        <Grid item md={12}>
                            <FormControlLabel control={<Switch  name ="inStock" checked={product.inStock} onChange={(e)=>setProduct({...product,inStock:e.target.checked})} />} label="In Stock" />

                        </Grid>

                        <Grid item md={12}>
                            <MultiSelect
                                label="Size"
                                onChange={handleMultipleValuesChange}
                                options={FIlterSizes}
                                value={product.size}
                                name={'size'}
                            />

                        </Grid>

                        <Grid item md={12}>
                            <MultiSelect
                                label="Color"
                                onChange={handleMultipleValuesChange}
                                options={FIlterColors}
                                value={product.color}
                                name={'color'}
                            />

                        </Grid>

                        <Grid item md={12}>
                            <MultiSelect
                                label="Categories"
                                onChange={handleMultipleValuesChange}
                                options={categories}
                                value={product.categories}
                                name={'categories'}
                            />

                        </Grid>
                    </Grid>
                    <Button variant="contained" type="primary" onClick={handleSubmit}>Create</Button>

                </PaperWrapper>
            </Grid>
        </Grid>
    )
}
