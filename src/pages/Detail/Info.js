import { Box, Typography } from "@material-ui/core";

import { Info } from "../../components";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

export default function FoodInfo({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((d, i) => {
        return (
          <Info key={i} label={d.label}>
            <Box fontWeight={400}>
              {d.content.split("\n").map((str, i) => (
                <Typography key={i} style={{ fontSize: 11, lineHeight: 1.5 }}>
                  {str}
                </Typography>
              ))}
            </Box>
          </Info>
        );
      })}
    </div>
  );
}

FoodInfo.propTypes = {
  data: PropTypes.array,
};
