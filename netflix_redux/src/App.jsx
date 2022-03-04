import React ,{useEffect}from 'react'
import Row from './componets/Row';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './componets/Home'
import Login from './componets/Login';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const App = () => {



   const user = useSelector(selectUser);
   const dispatch = useDispatch();

useEffect(()=>{
const unsubscribe  = auth.onAuthStateChanged((userAuth)=>{

if(userAuth){
dispatch(login({
uid: userAuth.uid,
email: userAuth.email


}))
  console.log(userAuth)

}

else{

  dispatch(logout)

}

})

return unsubscribe


},[])

  return (
    <div className="App">
      <Router>
  {!user ? <Login/>
:  
  <Switch>
       <Route path="/hello">

         <h2>hello</h2>
       </Route>
         
          <Route path="/row">
            <Row/>
          </Route>
 
 
 
 <Route exact path="/">
          <Home/>
          </Route>


        </Switch>
}
     
     
      
  
    </Router>
    </div>
  );
}

export default App;
