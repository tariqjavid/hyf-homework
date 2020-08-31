import React from 'react'
import { Route,Switch} from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Githubsearch from './Githubsearch'
function App() {
const users= Githubsearch()
 return (<>
 <Switch>
 <Route exact path='/' render={()=><Home users={users}/>}/>
 <Route exact path='/detail/:id' component={Detail}/>
 </Switch>
  </>)
}
export default App;
