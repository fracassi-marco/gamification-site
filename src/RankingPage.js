import React from 'react';
import Menu from './Menu';

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

class RankingPage extends React.Component {
  render() {
    let group = Object.entries(groupBy(this.props.activities, "author"))

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
              {group.map((entry, index) =>
                <div key={'group' + index} className="leaderboard-row flex align-center">
                  <div className="row-position">{index + 1}</div>
                  <div className="row-collapse flex align-center">
                    <div className="row-caller flex">
                      <div className="row-user">{entry[0]}</div>
                    </div>
                    <div className="row-team">{entry[1].length * 3}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  }

  export default RankingPage;