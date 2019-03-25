import React, { Component } from 'react';
import Menu from './Menu';
import axios from 'axios';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
    }

    change(item) {
        return (event) => {
            let newState = {}
            newState[item] = event.target.value
            this.setState(newState)
        }
    }

    submit(event) {
        event.preventDefault()
        
        axios.post(`https://539bk9ow41.execute-api.us-east-1.amazonaws.com/dev/save`, this.state)
            .then(console.log)
            .catch(console.log)
    }
    
    render() {
        return (
            <div>
                <Menu selected="add"></Menu>
                <form className="text-left p-3" onSubmit={this.submit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="text" onChange={this.change("date")} className="form-control" placeholder="yyyy-MM-dd" />                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" onChange={this.change("author")} className="form-control" placeholder="Author" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" onChange={this.change("type")} className="form-control" placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={this.change("title")} className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="links">Links</label>
                        <input type="text" onChange={this.change("links")} className="form-control" placeholder="Links" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default ListPage;

            