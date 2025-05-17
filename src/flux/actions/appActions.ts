export const NAVIGATE = 'NAVIGATE';
export const ADD_POST = 'ADD_POST';
export const LIKE_POST = 'LIKE_POST';

export const navigate = (page: string) => ({
    type: NAVIGATE,
    payload: page
});

export const addPost = (post: any) => ({
    type: ADD_POST,
    payload: post
});

export const likePost = (postId: number) => ({
    type: LIKE_POST,
    payload: postId
});