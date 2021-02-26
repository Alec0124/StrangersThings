
import ReactDOM from 'react-dom';
import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {
  Posts,
  Profile,
  Header,
  Home,
  Login,
  Logout,
  Register,
  Inbox,
  Outbox,
  SendMessage,
  Submit

} from './components';


const App = () => {

  //user object passed around when user is logged in
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState(null);


  return (
    <>

      <Header user={user} setUser={setUser} />
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/logout'>
        <Logout />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Switch>
        <Route path="/posts/submit">
          <Submit />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
      <Switch>
        <Route path="/profile">
          <Profile user={user} />
        </Route>
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