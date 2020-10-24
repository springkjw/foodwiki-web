import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Box,
  ButtonBase,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    boxShadow: "none",
  },
  media: {
    paddingTop: 140,
  },
  content: {
    padding: 0,
    paddingTop: 15,
  },
  actions: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export default function FoodCard(props) {
  const { id, name, place, image, tags, viewCount, commentCount } = props;

  const classes = useStyles();
  const { push } = useHistory();

  function goToDetail() {
    push(`/detail/${id}`);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={goToDetail}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5" component="h2">
                <Box fontWeight={900} fontSize={18}>
                  {name}
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
                        {viewCount.toLocaleString()}
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
                        {commentCount.toLocaleString()}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography>
            <Box fontWeight={500} fontSize={12} color={grey[600]}>
              {place}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        {tags.map((tag) => (
          <Grid item key={tag.id}>
            <ButtonBase>
              <Typography>
                <Box fontWeight={500} fontSize={13} color={grey[600]}>
                  {`#${tag.name}`}
                </Box>
              </Typography>
            </ButtonBase>
          </Grid>
        ))}
      </CardActions>
    </Card>
  );
}

FoodCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  place: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  viewCount: PropTypes.number,
  commentCount: PropTypes.number,
};

FoodCard.defaultProps = {
  id: 10,
  name: "로우파이테이블",
  place: "서울 용산",
  image: "https://material-ui.com/static/images/cards/paella.jpg",
  tags: [
    { id: 1, name: "서울역데이터" },
    { id: 2, name: "서울역맛집" },
    { id: 3, name: "라구맛집" },
    { id: 4, name: "인스타감성" },
  ],
  viewCount: 13928,
  commentCount: 392,
};
