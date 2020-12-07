import React from "react";
import { GridList, GridListTile, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  gridList: {
    width: 336,
  },
  photo: {
    cursor: "pointer",
    width: 110,
    height: 110,
    backgroundColor: grey[400],
    objectFit: "cover",
    objectPosition: "center",
  },
}));

export default function FoodPhoto({ photos }) {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <GridList
          cellHeight={110}
          cols={3}
          spacing={3}
          className={classes.gridList}
        >
          {photos.map((photo, index) => (
            <GridListTile key={index}>
              <img src={photo} className={classes.photo} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
}

FoodPhoto.propTypes = {
  photos: PropTypes.array,
};
