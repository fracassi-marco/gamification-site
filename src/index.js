import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListPage from './ListPage';
import RankingPage from './RankingPage';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom'

const routing = (
    <BrowserRouter>
        <div class='router'>
            <Route exact path="/" component={ListPage} />
            <Route path="/ranking" component={RankingPage} />
        </div>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
