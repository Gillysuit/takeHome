import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import cleanData from "../helperFunctions/cleanData";

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
  //fetch transformed data from server side.
  const [apiData, setApiData] = useState(null);
  const [menuArray, setMenuArray] = useState(null);
  const [menuTitle, setMenuTitle] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const updatesAPI = "api/getUpdates";
      try {
        const response = await fetch(updatesAPI);
        const json = await response.json();

        setApiData(json);
      } catch (error) {
        console.log(error);
      }
    }
    if (apiData === null) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(apiData)) {
      const [releaseNotes, returnArr] = cleanData(apiData);
      setMenuArray(returnArr);
      setMenuTitle(releaseNotes);
    }
  }, [apiData]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge
        badgeContent={menuArray ? menuArray.length : "0"}
        color="secondary"
      >
        <Avatar
          src={userImg}
          className={classes.bigAvatar}
          onClick={e => handleClick(e)}
        />
      </Badge>
      <UpdatesModal
        anchorEl={anchorEl}
        handleClose={handleClose}
        setMenuTitle={menuTitle}
        menuArray={menuArray}
      ></UpdatesModal>
    </div>
  );
};

export default AvatarNotifier;
