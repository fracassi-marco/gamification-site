import React, { Component } from 'react';
import Menu from './Menu';

class ListPage extends Component {
  render() {
    return (
      <div>
        <Menu selected="list"></Menu>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" class="date">Date</th>
                <th scope="col">Author</th>
                <th scope="col">Type</th>
                <th scope="col">Title</th>
                <th scope="col">Links</th>
              </tr>
            </thead>
            <tbody>
            {this.props.activities.sort((a, b) => a.date < b.date ? 1 : -1).map((activity, index) => 
              <tr key={'activity' + index}>
                <td>{activity.date}</td>
                <td>{activity.author}</td>
                <td>{activity.type}</td>
                <td>{activity.title}</td>
                <td>
                {activity.links.map((link, link_index) =>
                      <a key={'link' + index + link_index} href={link.url}>{link.type}</a>
                    ).reduce((prev, curr) => [prev, ', ', curr])}
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPage;
