import {useState, useEffect} from 'react';
 function Githubsearch() {
  const [newUser, setNewUser] = useState([]);
  useEffect(()=>{ 
  const url=`https://api.github.com/users`
  fetch(url)
  .then(res=>res.json())
  .then(result=>setNewUser(result))
   
   },[])
   return newUser;
}
export default Githubsearch
