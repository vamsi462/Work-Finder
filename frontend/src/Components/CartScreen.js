import React,{useEffect,useState}  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import 'semantic-ui-css/semantic.min.css'
import './mainpage.css';
import data from "./data"
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {useSelector,useDispatch} from "react-redux"

import {addToCart,removeFromCart} from "../actions/cartAction";


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


const useStyles = makeStyles((theme) => ({
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





export default function CartScreen(props) {
  const classes = useStyles();

  const cart=useSelector(state=>state.cart)
  const{cartItems}= cart;

  const postId =props.match.params.id;
  const qty =props.location.search ? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();

 const removeFromCartHandler = (postId) =>{
      dispatch(removeFromCart(postId));
   }

  useEffect(() => {
      if(postId){
         dispatch(addToCart(postId,qty));

      }
  },[]);

  const checkoutHandler = () => {
      props.history.push("/signin?redirect=ongoing");
  }
  return (
    
    <React.Fragment>
      <CssBaseline />
      <main>
   
     
   <Grid>
         <Grid item xs={12} sm={12}></Grid> 
      <Grid container spacing={0}>
        <Grid item xs={6} sm={2} >
            <Paper className={classes.paper} style={{height:800}}>
            </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper} style={{height:800}}>
          
          <div className={classes.root}>
          {
            cartItems.length === 0 ?
            <div>
                Cart is empty
            </div>
            :
            cartItems.map( item=>


      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.image} style={{height:160 }} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography  variant="h5" align="center" gutterBottom>
                  Work type:{item.name}
                </Typography>
                <Typography  variant="h6" align="center"color="textSecondary" gutterBottom>
                   Category:{item.category} Works
                </Typography>
                <Typography variant="h6" color="textSecondary">
                {/* <TextField id="outlined-basic" label="Required Number" variant="outlined" /> */}
                Number of Workers:  <select value = {item.qty} onChange = {(e) => dispatch(addToCart(item.post, e.target.value))}>
                           {[...Array(item.countInStock).keys()].map(x =>
                            <option key = {x+1} value = {x + 1}>{x + 1}</option>
                            )}
                        </select>
                </Typography>
              </Grid>
              <Grid item>

                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    



                <Button variant="contained" style={{backgroundColor:"#f0c040"}} onClick={() => removeFromCartHandler(item.post)}>
                     Cancel Post
                </Button>
                 
                </Typography>

              </Grid>
            </Grid>
            <Grid item>
              <Typography  variant="h6" align="center" gutterBottom> Wage: ₹{item.wage} /day</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

)}
    </div>

            
      </Paper>
        </Grid> 
        <Grid item xs={6} sm={4}>
            <Paper className={classes.paper} style={{height:800}}>
                  
 
    <div className={classes.root} >
      <Paper className={classes.paper} style={{height:90,backgroundColor:"#808080"}}>
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item xs>
            <Typography  variant="h5" align="center" gutterBottom>
                Subtotal ( {cartItems.reduce((a,c)=> a+c.qty, 0)} Work)
                :
                ₹{cartItems.reduce((a,c)=> a+c.wage*c.qty,0)}
              </Typography> 
          </Grid>
        </Grid>
      </Paper>
       <Paper className={classes.paper} style={{height:105,backgroundColor:"#808080"}}>
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item xs>
            <Typography variant="h6" align="center" gutterBottom>
            <Button variant="contained" style={{backgroundColor:"#f0c040"}} onClick = {checkoutHandler}>
                 Proceed to Checkout
                </Button>
                 
              </Typography>
          </Grid>
        </Grid>
      </Paper>
      
      {/* <Paper className={classes.paper} style={{height:90}}>
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item xs>
            <Typography variant="h6" align="center" gutterBottom>
            Qty:  <TextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  
                  InputLabelProps={{
                    shrink: true,
                    
                  }}
                  variant="filled"
             />
                


            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} style={{height:90}}>
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item xs>
            <Typography variant="h6" align="center" gutterBottom>

            <Button variant="contained" style={{backgroundColor:"#f0c040"}}>
                     Add to Cart
              </Button>


            </Typography>
          </Grid>
        </Grid>
      </Paper> */}
       

    </div> 







                      









            </Paper>
        </Grid> 
      </Grid>
    </Grid>
      
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