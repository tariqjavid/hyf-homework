import React,{useState ,useEffect,createContext} from 'react'
import Repo from './Repo'
const value=createContext();
const index=createContext();

const RepoSearch=()=>{
const [repo, setRepo] = useState([]);
console.log(repo)
    
    useEffect(()=>{
      const url='https://api.github.com/users/HackYourFuture-CPH/repos'
     fetch(url)
      .then(res=>res.json())
      .then(result=>setRepo(result))
    
       },[])
     return (<div>
       <h1 className="heading"> The repo of HackYourFuture</h1>
      <ul key='1'>{repo.length!=0 ? repo.map((val,i)=>{
      return(
        <value.Provider value={val} >
        <index.Provider value={i}>
           <Repo/>
        </index.Provider>
        </value.Provider>
          )
    }
    ):<p>loading...</p>}</ul>
       
      </div>)
   
}

export default RepoSearch;
export {value,index};