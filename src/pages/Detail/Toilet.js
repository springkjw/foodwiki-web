import { Box, Typography } from "@material-ui/core";

import { Info } from "../../components";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
      <Info label="위치">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            가게 내부
          </Box>
        </Typography>
      </Info>

      <Info label="시설 관리">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"남자화상실 칸 1개\n여자화장실 칸 1개\n거울, 온수, 비데, 휴지통, 공기청정기"
              .split("\n")
              .map((str, i) => (
                <p key={i}>{str}</p>
              ))}
          </Box>
        </Typography>
      </Info>

      <Info label="편의성">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"핸드워시, 휴지, 핸드크림".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="안전성">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"남녀 완전 분리".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="유의사항">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"aesop 핸드워시, 핸드밤".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
