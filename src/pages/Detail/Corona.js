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

export default function FoodCorona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="직원 위생">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            마스크착용ㆍ장갑착용ㆍ헤어캡착용
          </Box>
        </Typography>
      </Info>

      <Info label="손님 위생">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            입장 시 마스크착용 필수ㆍ손소독제 비치ㆍ발열체크
          </Box>
        </Typography>
      </Info>

      <Info label="내부 시설">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            QR코드입장ㆍ소독ㆍ거리두기ㆍ카드직접결제
          </Box>
        </Typography>
      </Info>

      <Info label="테이크아웃">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            테이크아웃 불가ㆍ배달 불가
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
