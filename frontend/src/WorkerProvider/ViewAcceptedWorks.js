import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import moment from 'moment'
import { updateWorkStatus, list, getStatusValues, } from './WorkProviderAPI';


const ViewAcceptedWorks = () => {

    const [acceptedworks, setAcceptedWorks] = useState([]);
     const [statusValues, setStatusValues] = useState([]);

    const {user,token}= isAuthenticated();

    const loadWorks = () => {
        list(user._id, token).then(data => {
            if(data){
                setAcceptedWorks(data);
            }
        });
    };
    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if(data) {
                setStatusValues(data);
            }
        });
    };

     useEffect(() => {
         loadWorks();
         loadStatusValues();
     }, []);


     const showWorksLength = () => {
        if (acceptedworks.length > 0) {
            return (
                <h2 className="text-danger">
                    Total works accepted by the worker: {acceptedworks.length}
                </h2>
            );
        } else {
            return <h3 className="text-danger">No Accepted orders</h3>;
        }
    };
    const showInput = (key, value) => (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input
                type="text"
                value={value}
                className="form-control"
                readOnly
            />
        </div>
    );
    const handleStatusChange = (e, acceptWorkId) => {
        updateWorkStatus(user._id, token, acceptWorkId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    loadWorks();
                }
            }
        );
        console.log('updated the status')
    };
     const showStatus = o => (
        <div className="form-group">
            <h3 className="mark mb-4">Status: {o.status}</h3>
            <select
                className="form-control"
                onChange={e => handleStatusChange(e, o._id)}
            >
                <option>Update Status</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <Layout
            title="Accepted Works"
            description={`G'day ${
                user.name
            }, you can manage all the orders here`}
            className="container-fluid"
        >
        <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showWorksLength()}

                    {acceptedworks.map((o, oIndex) => {
                        return (
                            <div
                                className="mt-5"
                                key={oIndex}
                                style={{ borderBottom: "5px solid indigo" }}
                            >
                                <h2 className="mb-5">
                                    <span className="bg-primary">
                                        Accepted ID: {o._id}
                                    </span>
                                </h2>

                                <ul className="list-group mb-2">
                                    <li className="list-group-item">
                                        {showStatus(o)}
                                    </li>
                                    <li className="list-group-item">
                                        Wage: ${o.wage}
                                    </li>
                                    <li className="list-group-item">
                                        Accepted by: {o.user.name}
                                    </li>
                                    <li className="list-group-item">
                                        Accepted on:{" "}
                                        {moment(o.createdAt).fromNow()}
                                    </li>
                                </ul>

                                <h3 className="mt-4 mb-4 font-italic">
                                    Total worksAccepted:{" "}
                                    {o.works.length}
                                </h3>

                                {o.works.map((p, pIndex) => (
                                    <div
                                        className="mb-4"
                                        key={pIndex}
                                        style={{
                                            padding: "20px",
                                            border: "1px solid indigo"
                                        }}
                                    >
                                        {showInput(" worktype", p.worktype)}
                                        {showInput(" wage", p.wage)}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
    </Layout>
    )
}

export default ViewAcceptedWorks
