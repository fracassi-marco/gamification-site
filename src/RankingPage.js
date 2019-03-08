import React from 'react';
import Menu from './Menu';

class RankingPage extends React.Component {
    render() {
        return (
          <div className="leaderboard flex column wrap">
          <div className="leaderboard-table flex column">
            <div className="leaderboard-header flex column grow">
    
              <Menu selected="ranking"></Menu>
    
              <div className="leaderboard-row flex align-center row--header">
                <div className="row-position">#</div>
                <div className="row-collapse flex align-center">
                  <div className="row-user--header">Punteggio</div>
                  <div className="row-rank--header">Autore</div>                  
                </div>            
              </div>
            </div>
    
            <div className="leaderboard-body flex column grow">
              <div>        
                <ul>                  
                </ul>
              </div>
            </div>
            </div>
        </div>
        );
      }
    }

export default RankingPage;