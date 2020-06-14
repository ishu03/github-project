import React from 'react'
import { connect } from 'react-redux';
import SearchForm from "./SearchForm"
import UsersContainer from "./UsersContainer"
import Spinner from "../components/Spinner"

const Landing = (props) => {
    return (
        <div>
            <div>
                <SearchForm />
                {props.loading ? <Spinner /> : <UsersContainer />}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        "loading": state.loading
    }
}

export default connect(mapStateToProps)(Landing)
