import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './Index/IndexPage';
import DetailContainer from './Detail/DetailContainer';
import ScrollToTop from './util/ScrollToTop';
import './Icons.jsx';
import './css-reset.scss';
import './main.scss';

const App = () => (
   <Router>
      <Switch>
         <ScrollToTop>
            <Route exact path="/" component={IndexPage} />
            <Route path="/detail/:id" component={DetailContainer} />
         </ScrollToTop>
      </Switch>
   </Router>
);

ReactDOM.render(<App />, document.getElementById('app-root'));