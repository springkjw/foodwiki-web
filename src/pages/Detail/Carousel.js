import React from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ResponsiveImage } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
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
        cellHeight={260}
        className={classes.gridList}
        rows={1}
        spacing={0}
      >
        {images.map((image, index) => (
          <GridListTile key={index}>
            <ResponsiveImage url={image.url} ratio={1.4} height={260} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

FoodCarousel.propTypes = {
  images: PropTypes.array,
};
