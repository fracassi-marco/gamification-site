import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class  Menu extends Component {
    

    render() {
        const pages = [
            {code: "list", name: "Elenco", url: "/"},
            {code: "ranking", name: "Classifica", url: "/ranking"}
          ];

        return (        
            <div className="filter-by flex grow wrap">            
                <div className="time-filter flex grow">
                    {pages.map((page, index) =>                                                             
                    <div key={'page' + index} className={"row-button pointer align-center " + (page.code == this.props.selected ? 'row-button--active' : '')}>
                        <Link to={page.url}>{page.name}</Link>
                    </div>    
                    )}  
                </div>            
            </div>
        )
    }
}

export default Menu;