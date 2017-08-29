import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/home';
import Search from './components/search';

class App extends React.Component {
  render()  {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}  />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}

export default App;
