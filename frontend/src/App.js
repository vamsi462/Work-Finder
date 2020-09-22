import React from 'react';
import  { useState } from "react";
import './App.css';
import Mainpage from "./Components/Mainpage"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import SimpleList1 from './Components/SimpleList1';
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp"
import Header from "./Components/Header"
import 'semantic-ui-css/semantic.min.css'
import cn from "classnames"
import SideBar1 from "./Components/SideBar1"
import Cards1 from "./Components/Cards1"
import CartScreen from "./Components/CartScreen"
import categoryScreen from './Components/CategoryScreen';
import OnGoingScreen from "./Components/OnGoingScreen"
import FindWork from "./Components/FindWork"
import CompletedWorks from "./Components/CompletedWorks"
import PostDetailsScreen from "./Components/PostDetailsScreen"




function App() {
  const [toggle,setToggle] = useState(true);

  const classes = cn('pusher','bottom',{'dimmed': toggle})
  
      function toggleMenu(){
          console.log("toggled")
        setToggle(!toggle)
      
      }

  return (
    
    <div className="App">
      <Router>
                <Route exact={true} path="/"  component={Mainpage} />    
                <Route exact={true} path="/signin" component={SignIn}/>
                <Route exact={true} path="/signup" component={SignUp}/>


      <div >

          
           <Header onToggleMenu={toggleMenu}/> 
           <div className="ui attached pushable" style={{height:650}}> 
                <SideBar1 toggleMenu={toggle}/>
          
           <main>
           <Switch>
                
               
              
                 {/* <Route exact={true} path="/construction/" component={SimpleList1}/>
                 <Route exact={true} path="/loading/" component={SimpleList1}/>
                 <Route exact={true} path="/farm/" component={SimpleList1}/>
                 <Route exact={true} path="/cleaning/" component={SimpleList1}/>
                 <Route exact={true} path="/gardening/" component={SimpleList1}/> */}
                 <Route  exact={true} path="/cart/:id?" component={CartScreen}/>


                 {/* <Route exact={true} path="/construction/:id" component={Cards1}/>
                 <Route exact={true} path="/loading/:id" component={Cards1}/>
                 <Route exact={true} path="/farm/:id" component={Cards1}/>
                 <Route exact={true} path="/cleaning/:id" component={Cards1}/>
                 <Route exact={true} path="/gardening/:id" component={Cards1}/> */}
                <Route exact={true} path="/category" component={categoryScreen}/>
                <Route exact={true} path="/ongoing/" component ={OnGoingScreen}/>
                <Route exact={true} path="/findwork" component={FindWork}/>
                <Route exact={true} path="/completed" component={CompletedWorks}/>
                <Route exact={true} path="/category/:id" component={PostDetailsScreen}/>
          </Switch>
           </main>
           </div>

       </div>
          
      
        
      </Router>


  
    </div>
  );
}

export default App;
