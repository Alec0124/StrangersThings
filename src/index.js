
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import {
  Auth,
  Posts,
  Profile,
  Header
} from './components';

const App = () => {

  const [user, setUser] = useState({
    id: '0124',
    username: 'Burns'

  });

  return (
    <>

      <Header user={user} setUser={setUser}/>
      <Route path='/auth'>
        <Auth />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
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