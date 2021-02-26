
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import {
  Auth,
  Posts,
  Submit,
  Profile
} from './components';

const App = () => {
  return (
    <>

      <nav>
        <Link to="/auth">Auth </Link>
        <Link to="/posts">Posts </Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Route path='/auth'>
        <Auth />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/submit">
        <Submit />
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