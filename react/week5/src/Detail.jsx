import React,{useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import './index.css';

const  Detail=()=>{
const {id}=useParams();
const [user,setUser] =useState([])
useEffect(()=>{ 

    
    const url=`https://api.github.com/users/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(result=>setUser(result))
    
     },[id])
     const available=(user)=>{

     return( (user!==null)?user :'Not available')
     }
    return(    
    <div className="detail_container">
    <div className="detail_wraper" > 
      
      <h2>{available(user.name)}</h2>
      <img src={user.avatar_url} alt="users' img"/>
      <div  className="items">   <h3>login:</h3> <div>{available(user.login)}</div></div>
      <div className="items"> <h3>Company Name:</h3> <div>{available(user.company)}</div></div>
      <div className="items"> <h3>Stating date:</h3> <div>{available(user.created_at)}</div></div>
      <div className="items"> <h3>Location:</h3> <div>{available(user.location)}</div></div>
      <div className="items"> <h3>followers:</h3> <div>{available(user.followers)}</div></div>
      <div className="items"> <h3>following</h3> <div> {available(user.following)}</div></div>
      <div className="items">  <h3>Tweeter id</h3><div> {available(user.twitter_username)}</div></div>
      <div className="items">  <h3>Email</h3> <div>{available(user.email)}</div></div>
      <div className="items">  <h3>Bio</h3> <div>{available(user.bio)}</div></div>
      
    </div>
</div>
    )
}
export default Detail;