import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListPage from './ListPage';
import RankingPage from './RankingPage';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom'
import axios from 'axios';

class App extends React.Component {
  state = {
    activities: []
  }

  componentDidMount() {
    axios.get(`${process.env.PUBLIC_URL}/data.json`)
      .then(res => {
        const activity = res.data.activities
        this.setState({ activities: activity });
      });
  }

  doSomeEvent() {
    console.log("event!!")
  }

  render() {
    return (
      <BrowserRouter>
          <div className='router'>
              <Route exact path="/" render={() => <ListPage doSomeEvent={this.doSomeEvent.bind(this)} activities={this.state.activities}/>}/>
              <Route path="/ranking" render={() => <RankingPage activities={this.state.activities}/>} />
          </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
