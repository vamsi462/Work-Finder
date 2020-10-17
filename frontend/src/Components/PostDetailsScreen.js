import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux';
import { detailsCategoryPost } from '../actions/categoryAction';
import {useDispatch} from "react-redux"
import  {acceptWorkPost} from "../actions/acceptWorkAction"
import image from "./Images/digging1.jpg"
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function FullWidthGrid(props) {
  const classes = useStyles();

  const userSignin = useSelector(state=>state.userSignin);
  const{userInfo} = userSignin


  const categoryPostDetails = useSelector(state => state.categoryPostDetails)
  const  {loading,category,error} = categoryPostDetails
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCategoryPost(props.match.params.id))
    return() =>{
      //
    }
  },[])

function postWork (category)  {
    let postWorkObject={}
    postWorkObject={...category}
    postWorkObject.accepteduserid=userInfo._id
    postWorkObject.acceptedusername=userInfo.name
    // console.log("========",postWorkObject)

  dispatch((acceptWorkPost(postWorkObject)))


}



  return (  loading ? <div>Loading..</div>:error? <div>{error}</div>:
    <div className={classes.root}>
  
      <Grid container spacing={0}>
     
      <Grid item xs={12} sm={2} >
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} sm={7}  >
          <Paper className={classes.paper} style={{height:800}}>
             <Grid item xs={12} sm={12} >
                <Paper className={classes.paper} style={{height:300}}>

                    <img src={image}></img>

                </Paper>
             </Grid>
            <Grid item xs={12} sm={12}>
                <Grid item xs={12} sm={12} >
                    <Paper className={classes.paper} style={{height:100}} >
                        <div style={{textAlign:"left",paddingTop:25,fontSize:20,fontStyle:"strong"}}>
                             Category:   {category.category}                     </div>
                
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Paper className={classes.paper} style={{height:100}}>
                        <div style={{textAlign:"left",paddingTop:25,fontSize:20,fontStyle:"strong"}}>
                            Sub-Category:    {category.subCategory}                    </div>
                   
                    </Paper>
                </Grid>
              
                <Grid item xs={12} sm={12} >
                    <Paper className={classes.paper} style={{height:100}}>
                        <div style={{textAlign:"left",paddingTop:25,fontSize:20,fontStyle:"strong"}}>
                            Description:{category.description}
                        </div>

                    </Paper>
                </Grid>
              
                   
             </Grid>  
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3} >
          <Paper className={classes.paper} style={{height:800}}>
          <Grid item xs={12} sm={12} >
                    <Paper className={classes.paper} style={{height:100}}>
                    <div style={{textAlign:"left",paddingTop:25,fontSize:20,fontStyle:"strong"}}>
                            Work Provider:{category.name}
                        </div>
                    </Paper>
            </Grid>    
            <Grid item xs={12} sm={12} >
                    <Paper className={classes.paper} style={{height:100}}>
                    <div style={{textAlign:"left",paddingTop:25,fontSize:20,fontStyle:"strong"}}>
                            Ph Number:  {category.phNumber}              </div>
                    </Paper>
            </Grid>   

          <Grid item xs={12} sm={12} >
                    <Paper className={classes.paper} style={{height:200}}>
                    <div style={{textAlign:"left",paddingTop:25,fontSize:20,fontStyle:"strong"}}>
                            Address:{category.address}
                        </div>
                    </Paper>
            </Grid>    
                
          <Grid item xs={12} sm={12} >

                    <Paper className={classes.paper} style={{height:150}}>
                    <div style={{paddingTop:25,fontSize:30,fontStyle:"strong"}}>
                        <Button variant="contained" color="primary" style={{fontSize:25}} onClick={() => postWork(category)}>
                          Accept Work
                        </Button>
                        </div>

                    </Paper>
                    
                    <Paper className={classes.paper} style={{height:150}}>
                    <div style={{paddingTop:25,fontSize:30,fontStyle:"strong"}}>
                      <Link to ="/findwork">
                        <Button variant="contained" color="primary" style={{fontSize:20}}>
                          Back 
                        </Button>
                      </Link>
                        </div>

                    </Paper>
            </Grid>    






            </Paper>
        </Grid>
      </Grid>


    </div>
    
  
    );
}

