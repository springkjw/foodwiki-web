import {
  Box,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    borderRadius: 10,
    boxShadow: "none",
  },
  media: {
    paddingTop: 140,
  },
  content: {
    padding: 0,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  actions: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

export default function FoodCard({ data }) {
  const { id, name, place, image, tags, views } = data;

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
                <Grid item>
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
                        {views ? views.toLocaleString() : 0}
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
        {tags &&
          tags.map((tag) => (
            <Grid item key={tag.id}>
              <ButtonBase>
                <Typography>
                  <Box fontWeight={400} fontSize={13} color={grey[600]}>
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
  data: PropTypes.object,
};
