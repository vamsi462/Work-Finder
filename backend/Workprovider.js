import React, { useState } from "react";
import Header from "../Header"
import 'semantic-ui-css/semantic.min.css'
 import cn from "classnames"
import SideBar1 from "../SideBar1"
 import SimpleList1 from "../SimpleList1"
//  import DashBoard from "./DashBoard"

function Workprovider() {
     const [toggle,setToggle] = useState(false);

const classes = cn('pusher','bottom',{'dimmed': toggle})

    function toggleMenu(){
        console.log("toggled")
        setToggle(!toggle)
    
    }
    return(
        <div >
           
            <Header onToggleMenu={toggleMenu}/> 
            <div className="ui attached pushable" style={{height:650}}> 
                 <SideBar1 toggleMenu={toggle}/>
               
                <div className={classes}>
                    <SimpleList1/>
                </div>

            </div>
            
            

        </div>
    )
}

export default Workprovider;