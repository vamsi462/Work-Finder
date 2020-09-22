import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useSelector,useDispatch } from 'react-redux';
import {useEffect} from "react";
import {listFindWork} from "../actions/findWorkAction"
import {listCategoryPost} from "../actions/categoryAction"
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {Link}  from "react-router-dom"
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import image from "./Images/digging1.jpg"






function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // display:'inline',
    paddingLeft:250,
    paddingBottom:10,
    display: 'flex',
    flexDirection: 'column',

  },
  paper: {
    // display: 'flex',
    // flexDirection: 'column',
    // padding: theme.spacing(5),
    // margin: 'auto',
    paddingLeft:100,
    maxWidth: 500,
    
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function FindWork(props) {
  const classes = useStyles();



  // const categoryPostSave =useSelector(state => state.categoryPostSave);
  // const{loading:loadingSave,success:successSave,error:errorSave} =categoryPostSave;
 

//  const findWorkList = useSelector(state=>state.findWorkList)

//  const {categories,loading,error} = findWorkList;


const categoryPost = useSelector(state => state.categoryPost)
const {loading,categories,error}=categoryPost;




 const dispatch = useDispatch();

   useEffect(() => {
     dispatch(listCategoryPost());
     return () => {
       //
     }
   },[])
 
  return (
   loading?<div>Loading...</div>:error?<div>{error}</div>:
   <React.Fragment>
   <CssBaseline />
   <main>

        


    <div className={classes.root}>

       <div style={{height:70}}>
         <div style={{fontSize:40,color:"rgb(7, 68, 117)",fontStyle:"bold",fontFamily:"trebuchet ms"}}>
            Active Works
         </div>
       
         </div>

       <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {categories.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.category}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={"/category/"+card.id}>
                       <Button size="large" color="primary">
                          More Details
                       </Button>
                    </Link>
                    <Button size="large" color="primary">
                      Accept Work
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
    </main>
     
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
   
    </React.Fragment>
  );
}




// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));
