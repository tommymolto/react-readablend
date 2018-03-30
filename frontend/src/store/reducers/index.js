import { combineReducers } from 'redux'

const HOME_INITIAL_STATE = {
  searchPosts : undefined,
  posts: [],
  postsOrder: 'voteScore',
  categories: [],
  commentsOrder: 'voteScore',
  isShowWaitProcessModal: false,
  redirectUrl: null,
  selectedPost: { post: undefined, comments: undefined }
};

function appProps(state = HOME_INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_POSTS':
    case 'REQUEST_POSTS_BY_CATEGORY':
    case 'REQUEST_SAVE_POST':
    case 'REQUEST_DELETE_POST':
    case 'REQUEST_VOTE_SCORE_POST':
    case 'REQUEST_POST':
    case 'REQUEST_SAVE_POST_COMMENT':
    case 'REQUEST_DELETE_POST_COMMENT':
    case 'REQUEST_VOTE_SCORE_POST_COMMENT': {
      const { redirectUrl } = action
      return { ...state, isShowWaitProcessModal: true, redirectUrl }
    }
    case 'REQUEST_SEARCH_POSTS': {
      const { searchPosts, redirectUrl } = action
      return { ...state, searchPosts, redirectUrl }
    }
    //All posts 
    case 'RETURN_POSTS': {
      const { posts, categories, redirectUrl } = action
      return { ...state, posts, categories, isShowWaitProcessModal: false, redirectUrl }
    }
    //One post
    case 'RETURN_POST': {
      const { post, comments, redirectUrl } = action
      return {
        ...state,
        selectedPost: { post, comments },
        isShowWaitProcessModal: false,
        redirectUrl
      }
    } case 'REQUEST_CHANGE_ORDER_POSTS': {
      const { postsOrder, redirectUrl } = action
      return {
        ...state,
        postsOrder,
        redirectUrl
      }
    } case 'REQUEST_CHANGE_ORDER_COMMENTS': {
      const { commentsOrder, redirectUrl } = action
      return {
        ...state,
        commentsOrder,
        redirectUrl
      }
    } case 'REQUEST_REDIRECT': {
      const { redirectUrl } = action
      return { ...state, redirectUrl: redirectUrl, isShowWaitProcessModal: false }
    }
    case 'CLEAN_REDIRECT_URL': {
      return { ...state, redirectUrl: null, isShowWaitProcessModal: false }
    }
    default:
      return state
  }
}

export default combineReducers({ appProps })