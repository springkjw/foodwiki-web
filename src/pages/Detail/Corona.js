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

export default function FoodCorona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="직원 위생">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"마스크 착용\n헤어캡 착용".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="손님 위생">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"입장 시 마스크 착용 필수\n손 소독제 비치"
              .split("\n")
              .map((str, i) => (
                <p key={i}>{str}</p>
              ))}
          </Box>
        </Typography>
      </Info>

      <Info label="내부 시설">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"카드 직접 결제".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>

      <Info label="테이크아웃">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"불가능".split("\n").map((str, i) => (
              <p key={i}>{str}</p>
            ))}
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
