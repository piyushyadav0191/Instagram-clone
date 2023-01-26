import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useFollowButtonStyles } from "../../styles";

function FollowButton({side}) {

const classes =  useFollowButtonStyles({side});
const [isFollowing, setFollowing] = useState(false)
const followButton = (
  <Button variant={side ? "text" : "contained"} color="primary" className={classes.button} onClick={() => setFollowing(true)} fullWidth >
    Follow
  </Button>
)
const followingButton = (
  <Button variant={side ? "text" : "outline"}  className={classes.button} onClick={() => setFollowing(false)} fullWidth >
    Following
  </Button>
)

  return isFollowing ? followingButton : followButton
}

export default FollowButton;
