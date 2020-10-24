import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Info } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

export default function FoodInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="식당 분류">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            양식
          </Box>
        </Typography>
      </Info>

      <Info label="위치">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            양식
          </Box>
        </Typography>
      </Info>

      <Info label="층수">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            1층
          </Box>
        </Typography>
      </Info>

      <Info label="접근 편의성">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            경사로
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
