import React,{useContext} from 'react';
import {value,index} from './RepoSearch'
import './index.css'
const Repo=()=>{

    const val = useContext(value)
    const ind = useContext(index)

    return(<>
    <div className="container">
    <ul className="table">
    <li key={ind}>{val.id}</li>
    <li key={ind}>{val.url}</li>
    </ul>
    </div>
    </>)
}
export default Repo;