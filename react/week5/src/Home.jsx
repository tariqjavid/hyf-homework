import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';
 export default function Home(props)
{
   const{users}=props
    return(
     <div className="container">
     <h1>list if Github users</h1>
     <div className="wraper">{users.map((user,index)=>{
      return(
      <div key={user.id} className="box"><img key={user.id} src={user.avatar_url} alt="users' img" /><div key={index}>{user.login}</div><NavLink  to={`detail/${user.login}`}>detail</NavLink></div>) 
         })
      }
      </div>
     </div>)/* end of container*/ 
}
