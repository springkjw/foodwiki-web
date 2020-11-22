import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  GridList,
  GridListTile,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import { Logo, Marker } from "../../assets";

import { FoodCard } from "../../components";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    height: 100,
  },
  header: {
    height: 100,
  },
  logo: {
    width: 100,
    marginTop: 10,
    marginBottom: 15,
  },
  marker: {
    width: 10,
    marginRight: 5,
  },
  container: {
    marginTop: 60,
  },
  region: {
    fontSize: 14,
    color: "#F95C29",
    fontWeight: 700,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Container maxWidth="sm">
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </Container>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar color="white" className={classes.root}>
          <Toolbar variant="dense">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.header}
            >
              <img src={Logo} className={classes.logo} />

              <div className={classes.region}>
                <img src={Marker} className={classes.marker} />
                <span>서울</span>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar />
      <Container className={classes.container}>
        <GridList cellHeight="auto" cols={1} spacing={25}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((foods, index) => (
            <GridListTile key={index}>
              <Grid container justify="center" alignItems="center">
                <FoodCard />
              </Grid>
            </GridListTile>
          ))}
        </GridList>
      </Container>
    </React.Fragment>
  );
}
