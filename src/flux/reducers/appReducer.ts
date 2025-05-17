import { AppState } from '../store/store';
import { NAVIGATE, ADD_POST, LIKE_POST } from '../actions/appActions';

const appReducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        currentPage: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post => 
          post.id === action.payload 
            ? { ...post, liked: !post.liked } 
            : post
        )
      };
    default:
      return state;
  }
};

export default appReducer;