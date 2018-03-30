import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment';
import VoteScore from './VoteScore'

function PostCommentItem(props) {
  const { post, comment } = props
  return (
    <div className="post-comment" >
      <div className="post-comment-author">
        by {comment.author} {Moment(comment.timestamp).from(new Date())}
      </div>
      <div>{comment.body}</div>
      <div className="post-comment-footer">
        <button className="edit-button" href="/" onClick={props.onClickEditButton}>Edit</button>
        <button className="delete-button" onClick={props.onClickDeleteButton} >Delete</button>
        <VoteScore
          voteScore={comment.voteScore}
          onClickLiked={e => props.onVoteScorePostComment(
            post.id,
            comment.id,
            'upVote'
          )}
          onClickNotLiked={e => props.onVoteScorePostComment(
            post.id,
            comment.id,
            'downVote'
          )}
        />
      </div>
    </div>
  )
}

PostCommentItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  onClickEditButton: PropTypes.func.isRequired,
  onClickDeleteButton: PropTypes.func.isRequired,
}

export default PostCommentItem