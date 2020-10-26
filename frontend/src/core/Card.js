import React, { Fragment } from 'react'
import ShowImage from './ShowImage'

const Card = ({work}) => {

    return (
    <Fragment>
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
               <ShowImage item={work} url="work" />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {work.worktype}{" "}
            </b>
            <div><b>Address:</b>{work.address}</div>
             <div><b>Phone:</b>{work.phone}</div>

            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
             
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

</Fragment>
    )
}

export default Card
