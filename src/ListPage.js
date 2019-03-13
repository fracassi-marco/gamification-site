import React, { Component } from 'react';
import './ListPage.css';
import Menu from './Menu';

class ListPage extends Component {
  render() {
    return (
      <div>
        <Menu selected="list"></Menu>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Author</th>
                <th scope="col">Type</th>
                <th scope="col">Title</th>
                <th scope="col">Links</th>
              </tr>
            </thead>
            <tbody>
            {this.props.activities.sort((a, b) => a.date < b.date).map((activity, index) => 
              <tr key={'activity' + index}>
                <td>{activity.date}</td>
                <td>{activity.author}</td>
                <td>{activity.type}</td>
                <td>{activity.title}</td>
                <td>
                {activity.links.map((link, link_index) =>
                      <a key={'link' + index + link_index} href="{link.url}">{link.type}</a>
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
