import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import About from './About';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;