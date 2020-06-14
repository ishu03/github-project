import React, { Component } from 'react';
import { connect } from "react-redux"
import { SearchUser, FetchUsers } from "../actions/UserActions"

class SearchForm extends Component {

    onSubmit = (e) => {
        
        e.preventDefault();
        this.props.FetchUsers(this.props.search_text)
    }

    render() {
        return (

            <div className="searchBox jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <div className="search-body">
                        <h1 className="display-4 mb-3 search-header">
                            <i className="fa fa-search search-icon" /> Search for Git Users
                        </h1>
                        <form id="searchForm" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                name="searchText"
                                placeholder="Search users..."
                                onChange={(e) => this.props.SearchUser(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary btn-bg mt-3">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = { SearchUser, FetchUsers }

const mapStateToProps = state => ({
    "search_text": state.search_text
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)