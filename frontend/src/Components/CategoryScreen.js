
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {signin} from "../actions/userActions"
import { saveCategoryPost } from '../actions/categoryAction';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import {listCategoryPost,deleteCategoryPost} from "../actions/categoryAction"
import axios from "axios"
import images from "./Images/brick.jpg"


//footer function

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        WorkFinder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




//styling
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    paddingLeft:250,
    paddingBottom:10,
    display: 'flex',
    flexDirection: 'column',

  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(1, 50),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


//main function

export default function CategoryScreen(props) {
  const  classes = useStyles();

 const[modalVisible,setModalVisible]=useState(false)


 const[id,setId]=useState('')
 const [name,setName] =useState('');
 const [wage,setWage] =useState('');
 const [category,setCategory] =useState('');
 const [subCategory,setSubCategory] =useState('');
 const [workersRequired,setWorkersRequired] =useState('');
 const [description,setDescription] =useState('');
//  const[image,setImage]= useState('')
 const[address,setAddress]= useState('')
//  const[uploading,setUploading]=useState(false)
 const [phNumber,setPhNumber]=useState('')

 const categoryPost = useSelector(state => state.categoryPost)
 const {loading,categories,error}=categoryPost;

 const categoryPostSave =useSelector(state => state.categoryPostSave);
 const{loading:loadingSave,success:successSave,error:errorSave} =categoryPostSave;

 const categoryPostDelete =useSelector(state => state.categoryPostDelete);
 const{loading:loadingDelete,success:successDelete,error:errorDelete} =categoryPostDelete;


 const dispatch =useDispatch();


useEffect(()=> {
  if(successSave){
    setModalVisible(false)
  }
    dispatch(listCategoryPost());
    return () => {
        //
    };
},[successSave,successDelete]);



const openModal = (category) => {
  setModalVisible(true)
  setId(category._id)
  setName(category.name)
  setCategory(category.category)
  setSubCategory(category.subcategory)
  setWage(category.wage)
  // setImage(category.Image)
  setDescription(category.description)
  setAddress(category.address)
  setPhNumber(category.phNumber)
}



const submitHandler =(e) => {
    e.preventDefault();
    dispatch(saveCategoryPost({_id:id,name,wage,description,category,subCategory,workersRequired,address,phNumber}))
}

const deleteHandler=(category) => {
  dispatch(deleteCategoryPost(category._id))
}

// const uploadFileHandler = (e) => {
//   const file = e.target.files[0];
//   const bodyFormData = new FormData()
//   bodyFormData.append('image',file);
//   setUploading(true)
//   axios.post("/api/uploads",bodyFormData,{
//     headers:{
//       'content-Type':'multipart/form-data'
//     }
//   }).then(response => {
//     setImage(response.data);
//     setUploading(false)
//   })
//   .catch((err) => {
//     console.log(err);
//     setUploading(false)
//   })
// }


// const checkoutHandler = () => {
//   props.history.push("/signin?redirect=category");
// }






  return (loading?<div>Loading...</div>:error?<div>{error}</div>:
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
  

      <Grid item xs={12} sm={4} md={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>openModal({})}
            >
              Create Post
            </Button>    
        </Typography>

   

{modalVisible &&

    <div >
     <Typography component="h1" variant="h5">
           Create Post
     </Typography>

      {loadingSave && <div>Loading...</div>}
      {errorSave && <div>{errorSave}</div>}

        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="FullName"
            label="FullName"
            name="FullName"
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phNumber"
            label="Contact Number"
            type="text"
            id="phNumber"
            value={phNumber}
            onChange={(e) => setPhNumber(e.target.value)}
          /> 

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Category"
            label="Category"
            type="text"
            id="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Sub-Category"
            label="Sub-Category"
            type="text"
            id="Sub-Category"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
              
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="wage"
            label="wage"
            type="number"
            id="wage"
            value={wage}
            onChange={(e) => setWage(e.target.value)}
          />


          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Workers Required"
            label="Workers Required"
            type="number"
            id="Workers Required"
            value={workersRequired}
            onChange={(e) => setWorkersRequired(e.target.value)}
          />

          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Description"
            label="Description"
            type="text"
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />


              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Address"
              label="Address"
              type="text"
              id="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {id ?'Update':'Submit'}
            </Button>
                  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={()=>setModalVisible(false)}
        
            >
              Back
            </Button>

    </form>
  </div>
   }
 </div>


       
  <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {
            categories.map((card) =>(  
             <Grid  key={card._id} item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                 <CardMedia
                    className={classes.cardMedia}
                     image={images}
                    title="Image title"
                  /> 
                <CardContent className={classes.cardContent}>

                    <Typography gutterBottom style={{fontSize:18,fontStyle:"bolder"}} component="h2">
                       Sub-Category : {card.subCategory} 
                    </Typography>
                    
                    <Typography gutterBottom  component="h2">
                      Category :  {card.category} 
                    </Typography>

                    <Typography gutterBottom  component="h2">
                      Wage :  {card.wage} 
                    </Typography>
                
                    <Typography gutterBottom  component="h2">
                      Workers-required : {card.workersRequired} 
                    </Typography>
                

                    <Typography  component="h2">
                      Description : {card.description} 
                    </Typography>

                    <Typography  component="h2">
                      Address : {card.address} 
                    </Typography>
                    
                  
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary" onClick={() => openModal(category)}>
                      EDIT
                    </Button>
                    <Button size="small" color="primary" onClick={() => deleteHandler(category)}>
                      DELETE
                    </Button>
                  </CardActions> 
                </Card>
              </Grid>
              ))}  
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}