import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {acceptWorkPost} from '../actions/acceptWorkAction'
import {listOnGoingWorksPost} from "../actions/onGoingWorks"
import image from "./Images/markings1.jpg"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'inline'
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    maxWidth: 900,
    
  },
  image: {
    width: 250,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();



  const userSignin = useSelector(state=>state.userSignin);
  const{userInfo} = userSignin
  console.log("userinfoid",userInfo)

  const onGoingList = useSelector(state=>state.onGoingList)
  const {loading,works,error}=onGoingList
  console.log("hello",works)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(listOnGoingWorksPost(userInfo._id))
  },[])



  return (loading ? <div>Loading...</div>:error ? <div>{error}</div>:
    <div className={classes.root}>
       <div style={{height:70}}>
         <div style={{fontSize:40,color:"rgb(7, 68, 117)",fontStyle:"bold",fontFamily:"trebuchet ms",paddtingTop:10}}>
            Ongoing Works
         </div>
         
       
         </div>
       {
         works.map((card)=>(
     
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" >
                  category:{card.category}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                 Sub-Category: {card.subCategory}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Worker Name: {card.acceptedusername}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Description : {card.description}
                </Typography>
               
                
                
                

              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> Wage :₹{card.wage}/day</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
            
            ))
          }
    </div>
  );
}
