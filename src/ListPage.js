import React, { Component } from 'react';
import './ListPage.css';
import Menu from './Menu';

class ListPage extends Component {
  render() {
    return (
      <div className="leaderboard flex column wrap">
      <div className="leaderboard-table flex column">
        <div className="leaderboard-header flex column grow">

          <Menu selected="list"></Menu>

          <div className="leaderboard-row flex align-center row--header">
            <div className="row-position">Data</div>
            <div className="row-collapse flex align-center">
              <div className="row-user--header">Autore</div>
              <div className="row-rank--header">Tipo</div>
              <div className="row-team--header">Titolo</div>
              <div className="row-team--header">Links</div>
            </div>            
          </div>
        </div>


        <div className="leaderboard-body flex column grow">

              {this.props.activities.map((activity, index) =>       
                <div key={'activity' + index} className="leaderboard-row flex align-center">
                  <div className="row-position">{activity.date}</div>
                  <div className="row-collapse flex align-center">
                      <div className="row-caller flex">                  
                        <div className="row-user">{activity.author}</div>
                      </div>                 
                      <div className="row-team">{activity.type}</div>
                      <div className="row-team">{activity.title}</div>
                      <div className="row-rank">
                      {activity.links.map((link, link_index) =>
                        <a key={'link' + index + link_index} href="{link.url}">{link.type}</a>
                      ).reduce((prev, curr) => [prev, ', ', curr])}
                      </div>
                  </div>          
                </div>
              )}
          </div>
        {/*<button onClick={this.props.doSomeEvent}>doSomeEvent</button>*/}
      </div>

    </div>
    );
  }
}

export default ListPage;
