import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Route,Link,Switch,Redirect,useLocation} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  return (
    <div>
      <Router>
         <Switch>
           <Route  path='/home'>
             <Home/>
           </Route>
           <Route path='/posts/:postId'>
             <PostDetails/>
            </Route>
           <Route exact path='/'>
             <Home/>
           </Route>
           <Route path='*'>
              <NoMatch></NoMatch>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
