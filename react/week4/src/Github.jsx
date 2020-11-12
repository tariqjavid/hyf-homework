import React,{useContext} from 'react';
import {data, getinput} from './Githubsearch'
import './index.css'
function Github() {
    const userData=useContext(data);
    const search=useContext(getinput);
    return (<div className="git_container">
    <h1>Github search</h1>
    <input type="text" onChange={(e)=>search(e)}/>
    {userData.length!=0 ? userData.items.map((val,i)=><div key={i}>{val.login}</div>):<p>loading...</p>}
    </div>)
   }
   export default Github;
   