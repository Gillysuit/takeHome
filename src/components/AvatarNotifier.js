import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";

import UpdatesModal from "./UpdatesModal";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 1,
    width: 80,
    height: 80
  }
});
const userImg =
  "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/09/untitled-goose-game.jpg?itok=rk2FbExJ";

const AvatarNotifier = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge badgeContent={2} color="secondary">
        <Avatar
          src={userImg}
          className={classes.bigAvatar}
          onClick={e => handleClick(e)}
        />
      </Badge>
      <UpdatesModal
        anchorEl={anchorEl}
        handleClose={handleClose}
      ></UpdatesModal>
    </div>
  );
};

export default AvatarNotifier;
