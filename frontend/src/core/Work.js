import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { read, listRelated } from './apiCore';
import Card from './Card';

const Work = (props) => {
     const [work, setWork] = useState({});
     const [relatedWork, setRelatedWork] = useState([]);
     const [error, setError] = useState(false);
    const loadSingleWork = workId => {
        read(workId).then(data => {
           if (data){
                setWork(data);
                // fetch related works
                listRelated(data._id).then(data => {
                   if(data) {
                        setRelatedWork(data);
                    }
                });
            }
        });
            
    }
    useEffect(() => {
            const workId = props.match.params.workId;
            loadSingleWork(workId);
    }, [props]);

    
    return (
        <Layout
            title={work && work.name}
            description={work && work.description && work.description.substring(0, 100)}
            className="container-fluid"
        >
       <div className="row">
                <div className="col-8">
                    {work && work.worktype && <Card work={work} showViewWorkButton={false}/>}
                </div>

                <div className="col-4">
                    <h4>Related works</h4>
                    {relatedWork.map((p, i) => (
                        <div className="mb-3" key={i}>
                            <Card work={p} />
                        </div>
                        
                    ))} 


                </div>
        </div>
        </Layout>
    )
}

export default Work
