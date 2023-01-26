import React, { useState } from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import { CommentIcon, LikeIcon, MoreIcon, RemoveIcon, SaveIcon, ShareIcon, UnlikeIcon } from "../../icons";
import { Link } from "react-router-dom";
import { Button, Divider, Hidden, TextField, Typography } from "@material-ui/core";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

function FeedPost({ post }) {
  const classes = useFeedPostStyles();
  const [showCaption, setCaption] = useState(false);
  const { id, media, likes, user, caption, comments } = post;

  return (
    <article className={classes.article}>
      {/* feed post header */}
      <div className={classes.postHeader}>
        <UserCard user={user} />
        <MoreIcon className={classes.moreIcon} />
      </div>
      <div>
        <img src={media} alt="Post media" className={classes.image} />
      </div>
      <div className={classes.postButtonsWrapper}>
        <div className={classes.postButtonsWrapper}>
          <LikeButton />
          <Link to={`/p/${id}`}>
            <CommentIcon />
          </Link>
          <ShareIcon />
          <SaveButton />
        </div>
        <Typography className={classes.like} variant="subtitle2">
          <span>{likes === 1 ? "1 Like" : `${likes} Likes`} </span>
        </Typography>
        <div className={showCaption ? classes.expanded : classes.collapsed}>
          <Link to={`/${user.username}`}>
            <Typography
              variant="subtitle2"
              component="span"
              className={classes.username}
            >
              {user.username}
            </Typography>
          </Link>
          {showCaption ? (
            <Typography
              varant="body2"
              component="span"
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          ) : (
            <div className={classes.captionWrapper}>
              <HTMLEllipsis
                unsafeHTML={caption}
                className={classes.caption}
                maxLine="0"
                ellipsis="..."
                basedOn="letters"
              />
              <Button
                className={classes.moreButton}
                onClick={() => setCaption(true)}
              >
                more
              </Button>
            </div>
          )}
        </div>
        <Link to={`/p/${id}`}>
          <Typography
            className={classes.commentsLink}
            variant="body2"
            component="div"
          >
            View all {comments.length} comments
          </Typography>
        </Link>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Link to={`/${comment.user.username}`}>
              <Typography
                variant="subtitle2"
                component="span"
                className={classes.commentUsername}
              >
                {comment.user.username}
              </Typography>{" "}
              <Typography variant="body2" component="span">
                {comment.contet}
              </Typography>
            </Link>
          </div>
        ))}
        <Typography color="textSecondary" className={classes.datePosted}>
          5 Days Ago
        </Typography>
      </div>
      <Hidden xsDown>
        <Divider />
        <Comment />
      </Hidden>
    </article>
  );
}

function LikeButton() {
  const classes = useFeedPostStyles()
  const [liked, setLiked] = useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;
  const handleLike = () => {
    console.log('like')
    setLiked(true)
  }
  
  const handleUnLike = () => {
    console.log('unlike')
    setLiked(false)
  }
  const onClick = liked ? handleUnLike : handleLike
  
  

  return <Icon className={className} onClick={onClick} />;
}
function SaveButton() {

  const classes = useFeedPostStyles()
  const [saved, setSaved] = useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;

  const handleSave = () => {
    console.log('save')
    setSaved(true)
  }
  
  const handleUnSave = () => {
    console.log('unsave')
    setSaved(false)
  }
  const onClick = saved ? handleUnSave : handleSave
  
  return <Icon className={classes.saveIcon}  onClick={onClick} />;
}
function Comment() {
  const classes = useFeedPostStyles();
  const [content, setContent] = useState('');

  return (
    <div className={classes.commentContainer}>
      <TextField className={classes.textField} fullWidth value={content} placeholder=" Add a comment..." multiline maxRows={2} minRows={1} onChange={event  => setContent(event.target.value)} InputProps={{classes: {
        root: classes.root,
        underline: classes.underline
      }}} />
      <Button color="primary" className={classes.commentButton} disabled={!content.trim()} >
        Post
      </Button>
    </div>
  )
}

export default FeedPost;
