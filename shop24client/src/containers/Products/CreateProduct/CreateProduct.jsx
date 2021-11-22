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
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import app from 'config/firebase'
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
const [file, setFile] = useState(null);

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

const handleClick = () => {
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log({downloadURL})
            setProduct({...product,image:downloadURL})
        });
      }
    );
  };
const handleSubmit = (e) =>{
    console.log({product})
    handleClick()
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
                        <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
                            {/* <DropzoneArea  accept="image/*"  filesLimit ="1" onChange={(value)=>handleUpload(value)}/> */}
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
