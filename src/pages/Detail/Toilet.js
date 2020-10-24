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

export default function FoodToilet() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="화장실 위치">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            가게 외부
          </Box>
        </Typography>
      </Info>

      <Info label="시설 관리">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            거울ㆍ온수ㆍ휴지통ㆍ건조기ㆍ환풍기ㆍ창문
          </Box>
        </Typography>
      </Info>

      <Info label="편의 관리">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            핸드워시ㆍ종이타올비치ㆍ방향제ㆍ휴지비치
          </Box>
        </Typography>
      </Info>

      <Info label="안전 관리">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            남여완전분리ㆍ세면대 남녀공용ㆍ도어락사용
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
