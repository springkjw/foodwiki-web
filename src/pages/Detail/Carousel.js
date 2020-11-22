import { GridList, GridListTile } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { ResponsiveImage } from "../../components";
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
}));

export default function FoodCarousel({ images }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={280}
        className={classes.gridList}
        rows={1}
        spacing={0}
      >
        {images.map((image, index) => (
          <GridListTile key={index}>
            <ResponsiveImage url={image.url} ratio={1.4} height={280} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

FoodCarousel.propTypes = {
  images: PropTypes.array,
};
