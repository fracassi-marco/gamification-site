import React from 'react'
import Menu from './Menu'

function groupBy (xs, key) {
  return Object.entries(xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {}))
}

function pointsOf(authorActivities) {
  return authorActivities.reduce((points, currentActivity) => {
    currentActivity.type === 'presentation' ? points+=3 : points++
    return points
  }, 0)
}

function byPoints(a, b) {
  return pointsOf(a[1]) < pointsOf(b[1]) ? 1 : -1
}

class RankingPage extends React.Component {
  render() {
    var group = groupBy(this.props.activities, "author")
      .sort(byPoints)

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
                    <div className="row-team">{pointsOf(entry[1])}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  }

  export default RankingPage