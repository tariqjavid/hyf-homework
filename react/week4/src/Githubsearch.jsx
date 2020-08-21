import React,{useState, useEffect,createContext} from 'react';
import Github from './Github'
const data=createContext();
const getinput=createContext();

 function Githubsearch() {
  const [user, setUser] = useState();
  const [newUser, setNewUser] = useState([]);
  const search=(e)=>{
 setUser(e.target.value)
}
  useEffect(()=>{
    if(user!=undefined)
    {
  const url=`https://api.github.com/search/users?q=${user}`
  fetch(url)
  .then(res=>res.json())
  .then(result=>setNewUser(result))
    }
   },[user])

 return (<>
<data.Provider value={newUser}>
<getinput.Provider value={search}>
  <Github/>
</getinput.Provider>
</data.Provider>
</>)
}
export default Githubsearch
export {data, getinput}