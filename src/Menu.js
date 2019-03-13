import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        const pages = [
            { code: "list", name: "List", url: "/" },
            { code: "ranking", name: "Ranking", url: "/ranking" }
        ];

        return (
            <ul class="nav">
                {pages.map((page, index) =>
                    <li key={'page' + index} className={"nav-item " + (page.code === this.props.selected ? 'row-button--active' : '')}>
                        <Link to={page.url} className="nav-link active">{page.name}</Link>
                    </li>
                )}
            </ul>
        )
    }
}

export default Menu;