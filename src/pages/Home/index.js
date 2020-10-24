import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  GridList,
  GridListTile,
  Container,
  Slide,
  useScrollTrigger,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { FoodCard } from "../../components";
import { Logo } from "../../assets";

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
  container: {
    marginTop: 60,
  },
  region: {
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: deepOrange[500],
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0,
    paddingBottom: 0,
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
              <Button
                aria-haspopup="true"
                variant="outlined"
                className={classes.region}
              >
                <Typography>
                  <Box fontSize={14} fontWeight={900} color={deepOrange[500]}>
                    경기도 성남시
                  </Box>
                </Typography>
              </Button>
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
