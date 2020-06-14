import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class UsersContainer extends Component {
    render() {

        let content = this.props.users && this.props.users.length ? this.props.users.map((user, index) => {
            return <UserCard key={index} user={user} />
        }) : null

        return (
            <div className="row user-container">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    "users": state.users
})

export default connect(mapStateToProps)(UsersContainer)