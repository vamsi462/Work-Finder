import React,{ useState } from "react"
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { emptyCart } from "./cartHelpers";
import { acceptWork } from "./apiCore";


const Checkout = ({works}) => {
     const [data, setData] = useState({
         loading: false,
         success: false,
         error: '',
         instance: {},
     });
    

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

         const showCheckout = () => {
        return isAuthenticated() ?(
         <div> {
            <Link to="/cart">
                <button className="btn btn-primary">View Your Status</button>
            </Link>
         } </div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to accept</button>
            </Link>
        );
    };

const accept = () => {
                    setData({
                        loading: true
                    })
                    const acceptWorkData  = {
                        works: works,
                    };
                    
                    acceptWork(userId, token, acceptWorkData)
                        .then(response => {
                            emptyCart(() => {
                                //setRun(!run); // run useEffect in parent Cart
                                console.log(' accepted and  empty cart');
                                setData({
                                    loading: false,
                                    success: true
                                });
                            });
                        })
                        .catch(error => {
                            console.log(error);
                            setData({
                                loading: false
                            });
                        });
      
};

    
    const showAccept = () => (
            
                    <button onClick={accept}  className="btn btn-success btn-block">
                        Accept
                    </button>
                
            )

      const showError = error => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );
    const showSuccess = success => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Thanks! You have accepted this work!
        </div>
    );

    const showLoading =(loading)=>loading&& <h2>loading....</h2>
    return (
        <div>
          {showLoading(data.loading)}
            { showSuccess(data.success)}
            {showError(data.error)}
         
          {showAccept()}
         
          {showCheckout()}

        </div>
    )
}

export default Checkout
