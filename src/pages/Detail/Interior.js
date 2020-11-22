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

export default function FoodInterior() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="음악">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"pop".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="색감">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"밝은".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="무드">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {".".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="출입형태">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"신발을 신고 들어감".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="출입형태">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"신발을 신고 들어감".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="좌식형태">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"일반 의자".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="특이편의시설">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"단독룸, 웨이팅 존".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="비상시설">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {".".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="테이블">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {".".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="의자">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"등받이 없음, 팔걸이 없음, 수납 없음\n엉덩이 쿠션 없음, 비고정형"
              .split("\n")
              .map((str, i) => (
                <p key={i}>{str}</p>
              ))}
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
