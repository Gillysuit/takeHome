import React from "react";
import Popover from "@material-ui/core/Popover";
//import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const UpdatesModal = props => {
  console.log("proppity props", props.menuArray);

  let menuList;
  if (Array.isArray(props.menuArray)) {
    (function() {
      const theList = [];
      const menuArr = props.menuArray;
      for (let i = 0; i < props.menuArray.length; i += 1) {
        const splitData = menuArr[i].split(",");
        theList.push(
          <ListItem key={i} button>
            <ListItemText primary={splitData[0]}></ListItemText>
            <ListItemText secondary={splitData[1]}></ListItemText>
            <ListItemText secondary={splitData[2]}></ListItemText>
          </ListItem>
        );
      }
      menuList = theList;
    })();
  }

  return (
    <Popover
      open={Boolean(props.anchorEl)}
      anchorEl={props.anchorEl}
      onClose={() => props.handleClose()}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
      {menuList ? menuList : "oi"}
    </Popover>
  );
};

export default UpdatesModal;
