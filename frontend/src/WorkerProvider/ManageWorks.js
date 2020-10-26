import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth';
import { getWorks, deleteWork } from './WorkProviderAPI';
import { Link } from 'react-router-dom';

const ManageWorks = () => {
    const [works, setWorks] = useState([]);
    

    const {
        user,
        token
    } = isAuthenticated();

    const loadWorks = () => {
        getWorks().then(data => {
             if(data) {
                setWorks(data);
            }
        });
    };

    const destroy = workId => {
            deleteWork(workId, user._id, token).then(data => {
               if(data) {
                    loadWorks();
                }
            });
        };

        useEffect(() => {
            loadWorks();
        }, []);
    return (
        <Layout
        title = "Manage Works"
        description = "Perform CRUD on works"
        className = "container-fluid"
        >

        <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Total {works.length} works
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {works.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.worktype}</strong>
                                <Link to={`/admin/work/update/${p._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>
                                </Link>
                                <span
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
        </div>
        </div>
        </Layout>
         )

    
}

export default ManageWorks
