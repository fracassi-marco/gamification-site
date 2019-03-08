import React from 'react';
import Menu from './Menu';

class RankingPage extends React.Component {
    render() {
        return (
          <div class="leaderboard flex column wrap">
          <div class="leaderboard-table flex column">
            <div class="leaderboard-header flex column grow">
    
              <Menu selected="ranking"></Menu>
    
              <div class="leaderboard-row flex align-center row--header">
                <div class="row-position">#</div>
                <div class="row-collapse flex align-center">
                  <div class="row-user--header">Punteggio</div>
                  <div class="row-rank--header">Autore</div>                  
                </div>            
              </div>
            </div>
    
            <div class="leaderboard-body flex column grow">
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