import { SEARCH_USER, FETCH_USERS, LOADING, FETCH_USER, FETCH_REPOS } from "../actions/types";

const initialState = {
    "search_text": "",
    "users": [],
    "loading": false,
    "user": {},
    "repos": []

}

export default function (state = initialState, action) {
    
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                search_text: action.payload
            }

        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

        case FETCH_USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        case FETCH_REPOS:
            return {
                ...state,
                loading: false,
                repos : action.payload
            }

        default:
            return state;
    }
}
