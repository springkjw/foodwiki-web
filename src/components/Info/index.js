import { Box, Grid, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 18,
    paddingBottom: 18,
  },
  hr: {
    margin: 0,
    width: "100%",
    height: 1,
    borderWidth: 0,
    backgroundColor: grey[300],
  },
}));

export default function Info({ label, children }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={4}>
          <Typography>
            <Box fontWeight={600} fontSize={12}>
              {label}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
      <hr className={classes.hr} />
    </React.Fragment>
  );
}

Info.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};
