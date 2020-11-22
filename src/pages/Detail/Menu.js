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

export default function FoodMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Info label="메뉴">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            {"히비커리나베(2인용) 26,000원\n 소대창구이(토핑) 3,000원\n소갈비구이(토핑) 3,000원\n 닭모모구이(토핑) 3,000원\n양등심구이(토핑) 3,000원\n 닭껍질구이(토핑) 3,000원\n고시히카리공기밥 2,000원\n 면사리 추가 3,000원\n 레몬치즈라이스 3,000원\n 큐브치즈 2,000원\n 가츠오부시 2,000원\n 닭봉카라아게 6,000원\n 닭연골카라아게 6,000원"
              .split("\n")
              .map((str, i) => (
                <p key={i}>{str}</p>
              ))}
          </Box>
        </Typography>
      </Info>

      <Info label="음료">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            .
          </Box>
        </Typography>
      </Info>

      <Info label="주종 분류">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            해당 없음
          </Box>
        </Typography>
      </Info>

      <Info label="주종 메뉴">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            해당 없음
          </Box>
        </Typography>
      </Info>

      <Info label="알러지 표기">
        <Typography>
          <Box fontWeight={400} fontSize={11}>
            해당 없음
          </Box>
        </Typography>
      </Info>
    </div>
  );
}
