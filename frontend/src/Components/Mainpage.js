import React from "react";
import './mainpage.css';
import background from "./Images/mainpage1.jpg"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import 'semantic-ui-css/semantic.min.css'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'


function Mainpage(props) {
  const userSignin = useSelector(state=>state.userSignin);
  const{userInfo} = userSignin


  const checkoutHandler = () => {
    props.history.push("/signin?redirect=category");
  }

  const checkoutWorkHandler = () => {
    props.history.push("/signin?redirect=findwork");
  }
  
  
  
  

    return (
    <div className="container">
       <img style={{backgroundSize:'cover'}} src={background} alt ="backgroundimage" /> 

       <Link to ="/">
           <h1>WorkFinder</h1>
       </Link>

      {/* <Link to="/category"> */}
       <div className="btn1">
            <button class="ui primary button" style={{fontSize:25,borderRadius:30}}   onClick = {checkoutHandler}>
                Post a Work
            </button>
      
       </div> 
       {/* </Link> */}


       <div className="vl"></div>
       <Link to="/findwork">
          <div className="btn2">
                <button  class="ui  primary button"style={{fontSize:25,borderRadius:30}}  onClick = {checkoutWorkHandler}>
                    Find a Work
                </button>
          </div>
       </Link>


      {
              userInfo ? <Link to ="/profile">{userInfo.name}</Link>:
     <Link to="/signin">
    <div className="login">
        <button class="ui primary button" style={{fontSize:17,borderRadius:30}}>
            SignIn/SignUp
        </button>
        {/* <Button href="#text-buttons"
          style={{textTransform:"lowercase",
                    fontSize:22,
                    fontStyle:"bolder",
                    color:"rgba(21, 92, 173, 0.842)"
                }}>
        login
      </Button> */}
    </div>
    </Link>

}
{/*     
    <Link to ="/signup">
     <div className="sign"> */}
       {/* <Button href="#text-buttons">
         signup
       </Button> */}
         {/* <button class="ui blue button" style={{fontSize:17,borderRadius:30}}>
           SignUp
         </button> */}
     {/* </div>
   </Link> */}

    </div>
    );
  }


export default Mainpage;
