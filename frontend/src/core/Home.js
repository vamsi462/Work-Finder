import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { getWorks } from './apiCore'
import Card from './Card'
import Search from './Search'

const Home = () => {
        const [worksByAccepted, setWorksByAccepted] = useState([])
        const [worksByPosted, setWorksByPosted] = useState([])
        const [error, setError] = useState(false)

        const loadWorksByAccepted = () => {
            getWorks('accepted').then(data => {
                if(data) {
                    setWorksByAccepted(data)
                }
            })
        }
        const loadWorksByPosted =()=>{
         getWorks('createdAt').then(data => {
             if(data.error){
                    setError(data.error)
             }
             else{
                setWorksByPosted(data)
             }
          
         })
     }

        useEffect(()=>{
            loadWorksByAccepted()
            loadWorksByPosted()
        },[])
    return (
        <Layout title = "Home Page"
            description = "Find the works here!!!"
            className = "container-fluid" >
               <Search/>
        <div className="row"> 
            {worksByPosted.map((work,i)=>(<Card key={i} work={work}/>))}
        </div>
        </Layout>

    )
}

export default Home
