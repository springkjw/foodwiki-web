import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  ButtonBase,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

import FoodInfo from "./Info";
import FoodCorona from "./Corona";
import FoodToilet from "./Toilet";
import FoodPhoto from "./Photo";
import FoodCarousel from "./Carousel";
import FoodTabArea from "./Tab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  tagList: {
    marginTop: 20,
  },
  tag: {
    marginRight: 5,
  },
}));

export default function Detail() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const data = {
    images: [
      {
        id: 1,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 2,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 3,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 4,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 5,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
    ],
    name: "로우파이테이블",
    place: "서울 용산",
    viewCount: 13928,
    commentCount: 392,
    tags: [
      { id: 1, name: "서울역데이터" },
      { id: 2, name: "서울역맛집" },
      { id: 3, name: "라구맛집" },
      { id: 4, name: "인스타감성" },
      { id: 5, name: "데이트" },
      { id: 6, name: "기념일" },
      { id: 7, name: "빈티지" },
      { id: 8, name: "예약제" },
    ],
    photos: [
      {
        id: 1,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 2,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 3,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 4,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
      {
        id: 5,
        url: "https://material-ui.com/static/images/grid-list/morning.jpg",
      },
    ],
  };

  return (
    <React.Fragment>
      <FoodCarousel images={data.images} />

      <Paper className={classes.container} square>
        <Container className={classes.content}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5" component="h2">
                <Box fontWeight={900} fontSize={18}>
                  {data.name}
                </Box>
              </Typography>
            </Grid>

            <Grid item>
              <Grid container direction="row">
                <Grid item style={{ marginRight: 10 }}>
                  <Grid container direction="row" alignItems="center">
                    <VisibilityIcon
                      style={{
                        fontSize: 13,
                        color: grey[400],
                        marginRight: 5,
                        marginTop: -1,
                      }}
                    />
                    <Typography>
                      <Box fontWeight={500} fontSize={11} color={grey[400]}>
                        {data.viewCount.toLocaleString()}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <ModeCommentIcon
                      style={{
                        fontSize: 11,
                        color: grey[400],
                        marginRight: 5,
                        marginTop: -2,
                      }}
                    />
                    <Typography>
                      <Box fontWeight={500} fontSize={11} color={grey[400]}>
                        {data.commentCount.toLocaleString()}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography>
            <Box fontWeight={500} fontSize={14} color={grey[600]}>
              {data.place}
            </Box>
          </Typography>

          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.tagList}
          >
            {data.tags.map((tag) => (
              <Grid item key={tag.id} className={classes.tag}>
                <ButtonBase>
                  <Typography>
                    <Box fontWeight={500} fontSize={13} color={grey[600]}>
                      {`#${tag.name}`}
                    </Box>
                  </Typography>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>

      <FoodTabArea index={index} setIndex={setIndex} />

      {index === 0 ? <FoodInfo /> : null}
      {index === 1 ? <FoodCorona /> : null}
      {index === 2 ? <FoodToilet /> : null}
      {index === 3 ? <FoodPhoto photos={data.photos} /> : null}
    </React.Fragment>
  );
}
