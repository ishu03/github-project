import { SEARCH_USER, FETCH_USERS, LOADING, FETCH_USER, FETCH_REPOS } from "../actions/types";

const axios = require('axios');
const ApiUrl = require("../Api").ApiUrl;

export const SearchUser = text => dispatch => {
    
    dispatch({
        "type": SEARCH_USER,
        "payload": text
    })
}

export const FetchUsers = text => dispatch => {
    
    dispatch({
        "type": LOADING
    })

    axios.get(`${ApiUrl}/search/users?q=${text}`)
        .then(resp => {
            let users = resp && resp.data && resp.data.items ? resp.data.items : []
            dispatch({ "type": FETCH_USERS, "payload": users })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                "type": FETCH_USERS, "payload": []
            })
        })
}

export const FetchUser = username => dispatch => {
    dispatch({
        "type": LOADING
    })

    axios.get(`${ApiUrl}/users/${username}`)
        .then(resp => {
            let user = resp && resp.data ? resp.data : {}
            dispatch({ "type": FETCH_USER, "payload": user })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                "type": FETCH_USERS, "payload": {}
            })
        })
}

export const FetchRepos = username => dispatch => {
    dispatch({
        "type": LOADING
    })

    axios.get(`${ApiUrl}/users/${username}/repos`)
        .then(resp => {
            let repos = resp && resp.data && resp.data ? resp.data : []
            dispatch({ "type": FETCH_REPOS, "payload": repos })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                "type": FETCH_REPOS, "payload": []
            })
        })
}