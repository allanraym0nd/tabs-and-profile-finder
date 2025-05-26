import { useState,useEffect } from "react";
import User from './card'

export default function GithubProfileFinder() {

    const[userName,setUserName] = useState('andysterks');
    const[userData,setUserData] = useState(null)
    const[loading,setLoading] =useState(true)

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();
        if (data) {
        setUserData(data)
        setLoading(false)
        }

        console.log(data)
    }

    

    function handleSubmit() {
        fetchGithubUserData();
        
    }

useEffect(()=> {
    fetchGithubUserData();
},[]);

if(loading) {
   return <h1>Loading....</h1>
}

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text"
                value={userName}
                onChange={(event)=> setUserName(event.target.value)}
                placeholder="Search Github Username..."/>
                <button onClick={handleSubmit}>Search</button>
            </div>
           {
            userData !== null ?  <User user={userData}/>: null
           }
        </div>
    )
}