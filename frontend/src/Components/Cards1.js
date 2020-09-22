// import React,{useEffect,useState}  from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {Link } from "react-router-dom"
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import 'semantic-ui-css/semantic.min.css'
// import './mainpage.css';
// import data from "./data"
// import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';
// import {useSelector,useDispatch} from "react-redux"
// import {detailsConstructionCat} from "../actions/categoryAction"
// import axios from "axios"



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



// export default function Album(props) {

//   const classes = useStyles();
//   const[qty,setQty] = useState(1)

//   const constructionCatDetails = useSelector(state =>state.constructionCatDetails)
//   const {construction,loading,error} = constructionCatDetails;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(detailsConstructionCat(props.match.params.id));
//     return () => {
//       //
//     }
//   },[])


//   // const [constructiondetail,setConstructionDetail] = useState([])      
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //       const {data} = await axios.get("/api/construction");
//   //       setConstructionDetail(data)
//   //   }
//   //   fetchData();
  
//   //       return () => {
//   //           //
//   //       }
//   //   },[])

//    const handleAddToCart = () =>{
//      props.history.push("/cart/"+ props.match.params.id + "?qty="+ qty)
//    }



//   return(loading?<div>Loading..</div>:error?<div>{error}</div>:<React.Fragment>
//       <CssBaseline />
//       <main>
        
      
        
//    <Grid>
//         <Grid item xs={12} sm={12}></Grid>  
//       <Grid container spacing={0}>
//         <Grid item xs={6} sm={2} >
//             <Paper className={classes.paper} style={{height:800}}>
//             </Paper>
//         </Grid>
//         <Grid item xs={6} sm={5}>
//           <Paper className={classes.paper} style={{height:800}}>
//            <img src={construction.image}/>
//           </Paper>
//         </Grid> 
//         <Grid item xs={6} sm={5}>
//             <Paper className={classes.paper} style={{height:800}}>
                  

//     <div className={classes.root}>
//       <Paper className={classes.paper} style={{height:90}}>
//         <Grid container wrap="nowrap" spacing={2} >
//           <Grid item xs>
//             <Typography  variant="h6" align="center" gutterBottom>
//                 Type of Catogery :{construction.Heading}
//               </Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper} style={{height:90}}>
//         <Grid container wrap="nowrap" spacing={2} >
//           <Grid item xs>
//             <Typography variant="h6" align="center" gutterBottom>
//                    Wage: ₹ {construction.Price} /day
//               </Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper} style={{height:90}}>
//         <Grid container wrap="nowrap" spacing={2} >
//           <Grid item xs>
//             <Typography variant="h6" align="center" gutterBottom>
//             Workers required:   <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
//                     {[...Array(construction.countInStock).keys()].map(x =>
//                       <option key={x + 1} value={x + 1}>{x + 1}</option>
//                     )}
//                   </select>


//             {/* <TextField id="outlined-basic" label="Required Number" variant="outlined" value={qty} onChange={(e) => { setQty(e.target.value) }} /> */}


//             {/* <TextField
//                   id="filled-number"
//                   label="Number"
//                   type="number"
                  
//                   InputLabelProps={{
//                     shrink: true,
                    
//                   }}
//                   variant="filled"
//              /> */}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Paper>
//       <Paper className={classes.paper} style={{height:90}}>
//         <Grid container wrap="nowrap" spacing={2} >
//           <Grid item xs>
//             <Typography variant="h6" align="center" gutterBottom>
            

//             <Link to ="#">
//             <Button variant="contained" style={{backgroundColor:"#f0c040"}} onClick={handleAddToCart}>
//                    Add 
//               </Button>
//               </Link>

//             </Typography>
//           </Grid>
//         </Grid>
//       </Paper>
      

//     </div>
//             </Paper>
//         </Grid> 
//       </Grid>
//     </Grid>
      
 
//       </main>
//       {/* Footer */}
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </footer>
//       {/* End footer */}
      
//     </React.Fragment>

    
//   );
// }