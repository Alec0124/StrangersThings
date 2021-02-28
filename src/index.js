
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
  UserPost

} from './components';


const App = () => {

  //user object passed around when user is logged in
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('username')) {
      setUser({
        username: localStorage.getItem('username'),
        token: localStorage.getItem('token')
      })
    }
  } ,[])

  return (
    <>

      <Header user={user} setUser={setUser} />
      <Route path='/login'>
        <Login setUser={setUser} user={user}/>
      </Route>
      <Route path='/logout'>
        <Logout user={user} setUser={setUser}/>
      </Route>
      <Route path='/register'>
        <Register setUser={setUser} user={user}/>
      </Route>
      <Switch>
        <Route path="/posts/submit">
          <Submit user={user}/>
        </Route>
        <Route path="/posts/:id" children={<Posts user={user}/>}>
          <SendMessage user={user}/>
          </Route>
          <Route path="/posts/:id" children={<Posts user={user}/>}>
          <UserPost user={user}/>
        </Route>
        <Route path="/posts">
          <Posts user={user}/>
        </Route>
      </Switch>
      <Switch>
        <Route path='/profile/inbox'>
          <Inbox user={user} messages={messages} />
        </Route >
      <Route path='/profile/outbox'>
        <Outbox user={user} messages={messages} />
      </Route >
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
    </>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);