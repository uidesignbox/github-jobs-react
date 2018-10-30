import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './Index/IndexPage';
import DetailContainer from './Detail/DetailContainer';
import './Icons.jsx';
import './css-reset.scss';
import './main.scss';

const App = () => (
   <Router>
      <Switch>
         <Route exact path="/" component={IndexPage} />
         <Route path="/detail/:id" component={DetailContainer} />
      </Switch>
   </Router>
);

ReactDOM.render(<App />, document.getElementById('app-root'));