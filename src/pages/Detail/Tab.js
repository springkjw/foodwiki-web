import { Tab, Tabs } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { deepOrange } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const FoodTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: deepOrange[500],
    height: 1,
    backgroundColor: "white",
  },
})((props) => <Tabs {...props} />);

const FoodTab = withStyles((theme) => ({
  root: {
    fontSize: 12,
    minWidth: 80,
    backgroundColor: "white",
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
}))((props) => {
  return <Tab role="tabpanel" {...props} />;
});

export default function FoodTabArea({ index, setIndex, tabs }) {
  return (
    <FoodTabs
      variant="scrollable"
      scrollButtons="off"
      value={index}
      onChange={(e, val) => setIndex(val)}
    >
      {tabs.map((tab, i) => (
        <FoodTab key={i} label={tab} />
      ))}
    </FoodTabs>
  );
}

FoodTabArea.propTypes = {
  index: PropTypes.number,
  setIndex: PropTypes.func,
  tabs: PropTypes.array,
};
