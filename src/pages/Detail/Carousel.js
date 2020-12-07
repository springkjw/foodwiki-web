import { GridList, GridListTile } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    height: 280,
    zIndex: 1,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  image: {
    objectFit: "cover",
    objectPosition: "center",
    height: "100%",
  },
}));

export default function FoodCarousel({ images }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={280}
        className={classes.gridList}
        cols={2.5}
        spacing={0}
      >
        {images.map((image, index) => (
          <GridListTile key={index} cols={images.length === 1 ? 2.5 : 1}>
            <img src={image} className={classes.image} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

FoodCarousel.propTypes = {
  images: PropTypes.array,
};
