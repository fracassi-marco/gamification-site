import React, { Component } from 'react';
import Menu from './Menu';

class ListPage extends Component {
  links(index, links) {
    return links
    .map((link, link_index) => <a key={'link' + index + link_index} href={link.url}>{link.type}</a>)
    .reduce((acc, prev) => {
      if (acc === "")  return prev
      return [acc, ", ", prev]
    }, "")
  }

  render() {
    return (
      <div>
        <Menu selected="list"></Menu>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="date">Date</th>
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
                <td>{this.links(index, activity.links)}</td>
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
