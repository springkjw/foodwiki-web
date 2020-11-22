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

export default function FoodInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="운영시간">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"평일 12:00 - 15:00\n평일 18:00 - 22:00\n주말 12:00 - 15:00"
              .split("\n")
              .map((str, i) => (
                <p key={i}>{str}</p>
              ))}
          </Box>
        </Typography>
      </Info>

      <Info label="전화번호">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"02-777-0578".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="SNS/홈페이지">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            @hibi.curry.noodle
          </Box>
        </Typography>
      </Info>

      <Info label="주소">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            서울 용산구 백범로87길 24 1층
          </Box>
        </Typography>
      </Info>

      <Info label="인근 교통 정보">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            남영역 1번 출구
          </Box>
        </Typography>
      </Info>

      <Info label="층수">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            단층, 1층
          </Box>
        </Typography>
      </Info>

      <Info label="접근 편의성">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            계단
          </Box>
        </Typography>
      </Info>

      <Info label="오픈 일자">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            2020.10.23 가오픈
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
