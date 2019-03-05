import React, { Component } from 'react';
import './ListPage.css';
import Menu from './Menu';
import axios from 'axios';

class ListPage extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    axios.get(`${process.env.PUBLIC_URL}/data.json`)
      .then(res => {
        console.log(res)        
        const activity = res.data.activities
        this.setState({ activities: activity });
      });
  }

  render() {
    return (
      <div class="leaderboard flex column wrap">
      <div class="leaderboard-table flex column">
        <div class="leaderboard-header flex column grow">

          <Menu selected="list"></Menu>

          <div class="leaderboard-row flex align-center row--header">
            <div class="row-position">Data</div>
            <div class="row-collapse flex align-center">
              <div class="row-user--header">Autore</div>
              <div class="row-rank--header">Tipo</div>
              <div class="row-team--header">Titolo</div>
              <div class="row-team--header">Links</div>
            </div>            
          </div>
        </div>


        <div class="leaderboard-body flex column grow">
          <div>        
            <ul>
              {this.state.activities.map(activity =>       
                <div class="leaderboard-row flex align-center">
                  <div class="row-position">{activity.date}</div>
                  <div class="row-collapse flex align-center">
                      <div class="row-caller flex">                  
                        <div class="row-user">{activity.author}</div>
                      </div>                 
                      <div class="row-team">{activity.type}</div>
                      <div class="row-team">{activity.title}</div>
                      <div class="row-rank">
                      {console.log(activity)}
                      {activity.links.map(link =>
                        <a href="{link.url}">{link.type}</a>
                      ).reduce((prev, curr) => [prev, ', ', curr])}
                      </div>
                  </div>          
                </div>
              )}
            </ul>
          </div>
        </div>
        <div class="leaderboard-footer flex align-center">
          Page 1 of 2 <a class="footer-btn pointer">Next</a> 25 of 37 items
        </div>
      </div>

    </div>
    );
  }
}

export default ListPage;
