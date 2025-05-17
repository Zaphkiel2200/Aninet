import { createStore } from 'redux';
import appReducer from '../reducers/appReducer';

export interface AppState {
    currentPage: string;
    posts: any[];
    user: any;
}

const initialState: AppState = {
    currentPage: 'home',
    posts: [],
    user: null
};

const store = createStore(appReducer, initialState);

export default store;