import { Back as BackIcon } from "../../assets";
import { IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    zIndex: 1000,
  },
  arrow: {
    width: 15,
  },
}));

export default function Back({ onClick = () => {} }) {
  const classes = useStyles();

  return (
    <IconButton className={classes.button} onClick={onClick}>
      <img src={BackIcon} className={classes.arrow} />
    </IconButton>
  );
}
