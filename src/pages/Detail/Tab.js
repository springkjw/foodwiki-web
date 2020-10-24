import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const FoodTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: deepOrange[500],
    height: 1,
  },
})((props) => <Tabs {...props} />);

const FoodTab = withStyles((theme) => ({
  root: {
    fontSize: 12,
    minWidth: 0,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      color: deepOrange[500],
      opacity: 1,
    },
    "&$selected": {
      color: deepOrange[500],
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: deepOrange[500],
    },
  },
  selected: {
    color: deepOrange[500],
  },
}))((props) => <Tab disableRipple {...props} />);

export default function FoodTabArea({ index, setIndex }) {
  return (
    <FoodTabs
      variant="fullWidth"
      value={index}
      onChange={(e, val) => setIndex(val)}
    >
      <FoodTab label="식당 정보" />
      <FoodTab label="COVID-19" />
      <FoodTab label="화장실" />
      <FoodTab label="사진 15장" />
    </FoodTabs>
  );
}

FoodTabArea.propTypes = {
  index: PropTypes.number,
  setIndex: PropTypes.func,
};
