import React, { Fragment, useState } from 'react'
import ShowImage from './ShowImage'
import { Link, Redirect } from 'react-router-dom';
import { addItem, removeItem } from './cartHelpers';
import { isAuthenticated } from '../auth';

const Card = ({
    work,
    showViewWorkButton = true,
    showAddToCartButton = true,
    showRemoveWorkButton = false,
    showEditButton = false,
  }) => {


   const [redirect, setRedirect] = useState(false);

      

    const showViewButton= showViewWorkButton=>{
        return(
            showViewWorkButton &&  (
              <>
                <Link to = { `/work/${work._id}`}
                    className = "mr-2" >

                    <button
                className="button is-small is-outlined is-primary   is-pulled-right"        
              >
                View Details
              </button>
                </Link>
                </>
            )
        )
    }
   
    const addToCart = () => {
           addItem(work, setRedirect(true));
    }

      const shouldRedirect = redirect => {
        if (redirect) {
          return <Redirect to = "/cart" /> ;
        }
      };

   
        
        
    const showAddToCartBtn = showAddToCartButton => {
         return (
            showAddToCartButton && isAuthenticated() && isAuthenticated().user.role === 0 && (
            <button  onClick = {addToCart}
            className = "button is-small  is-primary   is-pulled-left " >
                Add to cart
               
             </button>
      )
     );
    };
    const showRemoveButton = showRemoveWorkButton => {
    return (
      showRemoveWorkButton && (
        <button
          onClick={() => {
            removeItem(work._id);
            //setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Work
        </button>
     ));
     };
    return (
    <Fragment>
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
               <ShowImage item={work} url="work" />
            </figure>
            {shouldRedirect(redirect)}
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {work.worktype}{" "}
            </b>
            <div><b>Address:</b>{work.address}</div>
             <div><b>Phone:</b>{work.phone}</div>
              <div><b>Workers Required: </b>{work.reqWorkers}</div>
              {showViewButton(showViewWorkButton)}
              {showRemoveButton(showRemoveWorkButton)}
              {showAddToCartBtn(showAddToCartButton)}
          </div>
        </div>
      </div>
    </div>

</Fragment>
    )
}

export default Card
