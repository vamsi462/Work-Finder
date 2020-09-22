// import React,{useState,useEffect} from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import axios from "axios"
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {Link } from "react-router-dom"
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import 'semantic-ui-css/semantic.min.css'
// import './mainpage.css';

// import {useSelector, useDispatch } from 'react-redux';
// import { listConstructionCat } from '../actions/categoryAction';



// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         WorkFinder
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


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



// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];




// export default function Album() {
//   const classes = useStyles();

//   const constructionCatList = useSelector(state => state.constructionCat);
//   const{constructions,loading,error} = constructionCatList;
//   const dispatch = useDispatch();
  
//   useEffect(()=> {
//     dispatch(listConstructionCat());

//     return () => {

//     }
//   },[])

   

  


//     //   const [constructionworks,setConstructionWorks] = useState([]);
//     // //   // const [loadingworks,setLoadingWorks] = useState([]);
//     // //   // const [farmworks,setFarmWorks] = useState([]);
//     // //   // const [gardeningworks,setGardeningWorks] = useState([]);
//     // //   // const [cleaningworks,setCleaningWorks] = useState([]);
    
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         const {data} = await axios.get("/api/construction");
//     //         setConstructionWorks(data)
//     //     }

//     //     fetchData();
        
//     //     return () => {
//     //         //
//     //     }
//     // },[])





//     // loading?<div>Loading...</div>:
//     // error?<div>{error}</div>:





//   return  (loading?<div>Loading..</div>:error?<div>{error}</div>:<React.Fragment>
//       <CssBaseline />
//       <main>
   
//         <Container className={classes.cardGrid} maxWidth="md">
//         <Grid container spacing={4}>
 
//             {
//             constructions.map((card) =>(

             
//              <Grid item key={card.id} xs={12} sm={6} md={4}>

//                 <Card className={classes.card}>
//                  <CardMedia
//                     className={classes.cardMedia}
//                     image={card.Image}
//                     title="Image title"
//                   /> 
//                   {/* <img src={card.Image}></img> */}
//                   <CardContent className={classes.cardContent}>

//                     <Typography gutterBottom variant="h5" component="h2">
//                       {card.Heading}
//                     </Typography>
                
//                     <Typography>

//                      {card.Discrption}
//                     </Typography>

//                   </CardContent>

//                   <CardActions>
//                     <Link to={"/" + card.Category + "/" + card.id}>
//                     <Button size="small" color="primary">
//                       View
//                     </Button>
//                     </Link>
                 
//                     <Typography>
//                         ₹ {card.Price} /day
//                     </Typography>

//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//           WorkFinder
//         </Typography>
//         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </footer>
//       {/* End footer */}
      
//     </React.Fragment>

// )  
  
  
// }