import React from "react";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";

const UpdatesModal = props => {
  // fetch using useEffect ~> the md from github gist

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
      <MenuItem>Release notes</MenuItem>
      <MenuItem>Release notes2</MenuItem>
    </Popover>
  );
};

export default UpdatesModal;
