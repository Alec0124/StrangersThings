
import ReactDOM from 'react-dom';
import React, { useContext, createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Posts,
  Header,
  Home,
  Login,
  Logout,
  Register,
  Inbox,
  Outbox,
  SendMessage,
  Submit,
  Profile,
  ViewPost
} from './components';
import {fetchMe} from './api/index.js';


const App = () => {

  //user object passed around when user is logged in
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!!localUser) {
      setUser(localUser);
    }
  }, [setUser])

  return (
    <>

      <Header user={user} setUser={setUser} />
      <Route path='/login'>
        <Login setUser={setUser} user={user} />
      </Route>
      <Route path='/logout'>
        <Logout user={user} setUser={setUser} />
      </Route>
      <Route path='/register'>
        <Register setUser={setUser} user={user} />
      </Route>
      <Switch>
        <Route path="/posts/submit">
          <Submit user={user}/>
        </Route>
        <Route path="/posts/:id">
          <ViewPost user={user}/>
        </Route>
        <Route path="/posts">
          <Posts user={user} />
        </Route>
      </Switch>
      <Switch>
        <Route path='/profile/inbox'>
          <Inbox user={user} />
        </Route >
        <Route path='/profile/outbox'>
          <Outbox user={user} />
        </Route >
        <Route path='/profile'>
          <Profile user={user}/>
        </Route >
      </Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);