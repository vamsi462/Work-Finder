import React from "react";
import 'semantic-ui-css/semantic.min.css'
import cn from "classnames"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ConstructionWorks from "./SimpleList1";
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
  



function SideBar1(props) {
    
    const classes = useStyles();

const classs = cn ('ui','sidebar','overlay', 'left', 'menu','animating',
{'visible':props.toggleMenu})
  
    return( 
        <div className={classs}>
        <div className={classes.root} >

        <List component="nav" aria-label="main mailbox folders">
          <ListItem style={{fontStyle:"bold",fontSize:30,color:"black",textAlign:"center",itemsAlign:"center"}}>
            Categories
          </ListItem>
        </List>
  
        <Divider />
  
        <List component="nav" aria-label="secondary mailbox folders">

        
              <ListItemLink style={{color:"black"}} >
                <i className="big building outline icon" ></i>
                <ListItemText primary="Construction Works" />
              </ListItemLink>
         

          <Divider />

        
              <ListItemLink style={{color:"black"}}>
                <i class="big boxes icon"></i>
                <ListItemText primary="Loading & Unloading Loads" />
              </ListItemLink>
         
          <Divider />

          
         
              <ListItemLink style={{color:"black"}}>
              <i class="big dolly icon"></i>
                <ListItemText primary="Farm Works" />
              </ListItemLink>
          

          <Divider />


         
            <ListItemLink style={{color:"black"}}>
              <i class="big tree icon"></i>
              <ListItemText primary="Garending Works" />
            </ListItemLink>
         

          <Divider />

         
              <ListItemLink style={{color:"black"}} >
                <i class="big quidditch icon"></i>
                <ListItemText primary="Cleaning Works" />
              </ListItemLink>
        

          <Divider />
          
        
        </List>
      </div>
      </div>
    );
}

export default SideBar1;