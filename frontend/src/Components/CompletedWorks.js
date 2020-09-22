import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
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

  return (
    <div className={classes.root}>


<div style={{height:70}}>
         <div style={{fontSize:40,color:"rgb(7, 68, 117)",fontStyle:"bold",fontFamily:"trebuchet ms",paddtingTop:20}}>
            Completed Works
         </div>
         
       
         </div>
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
                <Typography gutterBottom variant="subtitle1">
                  Category : construction Works
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Sub-Category : layout Works
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Worker Name : Prasanth  
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Description : marking layouts for a house site
                </Typography>
               
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Wage :₹ 300/day</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
