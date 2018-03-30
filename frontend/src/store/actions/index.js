//Posts
export function requestPosts(redirectUrl = null) {
  return {
    type: 'REQUEST_POSTS',
    redirectUrl
  }
}

export function requestPostsByCategory(category, redirectUrl = null) {
  return {
    type: 'REQUEST_POSTS_BY_CATEGORY',
    category,
    redirectUrl
  }
}

export function requestSearchPosts(value, redirectUrl = null) {
  return {
    type: 'REQUEST_SEARCH_POSTS',
    searchPosts: value,
    redirectUrl
  }
}

export function returnPosts(posts, categories, redirectUrl = null) {
  return {
    type: 'RETURN_POSTS',
    posts,
    categories,
    redirectUrl
  }
}

//Post
export function requestPost(postId, redirectUrl = null) {
  return {
    type: 'REQUEST_POST',
    postId,
    redirectUrl
  }
}

export function returnPost(post, comments, redirectUrl = null) {
  return {
    type: 'RETURN_POST',
    post,
    comments,
    redirectUrl
  }
}

export function requestSavePost(post, redirectUrl = null) {
  return {
    type: 'REQUEST_SAVE_POST',
    post,
    redirectUrl
  }
}

export function requestDeletePost(postId, redirectUrl = null) {
  return {
    type: 'REQUEST_DELETE_POST',
    postId,
    redirectUrl
  }
}

export function requestVoteScorePost(postId, option, redirectUrl = null) {
  return {
    type: 'REQUEST_VOTE_SCORE_POST',
    postId,
    option,
    redirectUrl
  }
}

export function requestSaveComment(postId, comment, redirectUrl = null) {
  return {
    type: 'REQUEST_SAVE_COMMENT',
    postId,
    comment,
    redirectUrl
  }
}

export function requestVoteScorePostComment(postId, commentId, option, redirectUrl = null) {
  return {
    type: 'REQUEST_VOTE_SCORE_POST_COMMENT',
    postId,
    commentId,
    option,
    redirectUrl
  }
}

export function requestDeletePostComment(postId, commentId, redirectUrl = null) {
  return {
    type: 'REQUEST_DELETE_POST_COMMENT',
    postId,
    commentId,
    redirectUrl
  }
}

export function requestChangeOrderPosts(order, redirectUrl = null) {
  return {
    type: 'REQUEST_CHANGE_ORDER_POSTS',
    postsOrder: order,
    redirectUrl
  }
}

export function requestChangeOrderComments(order, redirectUrl = null) {
  return {
    type: 'REQUEST_CHANGE_ORDER_COMMENTS',
    commentsOrder: order,
    redirectUrl
  }
}

//app
export function requestRedirect(url) {
  return {
    type: 'REQUEST_REDIRECT',
    redirectUrl: url
  }
}

export function cleanRedirectUrl() {
  return {
    type: 'CLEAN_REDIRECT_URL',
    redirectUrl: null
  }
}