export interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
};

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
};

export interface UserState {
    users: User[];
    loading: boolean;
    error: null | string;
};

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
};

interface FetchUsersSuccesAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: User[];
};

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
};

export type UserAction = FetchUserAction | FetchUsersSuccesAction | FetchUsersErrorAction;
