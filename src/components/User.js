import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from './Spinner'
import { FetchUser, FetchRepos } from '../actions/UserActions'

class User extends Component {

    componentDidMount() {
        this.props.FetchUser(this.props.match.params.username)
        this.props.FetchRepos(this.props.match.params.username)
    }

    render() {
        
        let { user, repos } = this.props;

        let userInfo = (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={user.avatar_url} className="thumbnail" alt="Poster" />
                        <h4>{user.login}</h4>
                        <h5>{user.location}</h5>
                    </div>
                    <div className="col-md-8">
                        <h3 className="repo-title">Repositories</h3>
                        <div className="list-group">
                            {
                                repos.map((repo,index) =>
                                    <div className="repo-item" key={index}>
                                        <h5><a target="_blank" href={repo.html_url}>{repo.name}</a></h5>
                                        <div className="repo-desc">{repo.description}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            this.props.loading ? <Spinner /> : userInfo
        )
    }
}

const mapDispatchToProps = { FetchUser, FetchRepos }

const mapStateToProps = state => {
    return {
        "user": state.user,
        "repos": state.repos,
        "loading": state.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)

