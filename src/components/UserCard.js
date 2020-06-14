import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class UserCard extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100 user-card">
          <img className="w-100 mb-2 user-thumbnail" src={user.avatar_url} alt="User Cover" />
          <h5 title={user.login} className="text-light card-title">
            {user.login}
          </h5>
          <Link className="btn btn-primary user-details-btn" to={`/user/${user.login}`}>
            User Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}
