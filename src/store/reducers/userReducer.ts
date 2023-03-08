import { UserState, UserAction, UserActionTypes } from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] };

        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload };

        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload };

        default:
            return state;
    }
}

export default userReducer;
