import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as pages from "../pages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function AppRouter() {
  const classes = useStyles();

  return (
    <Router>
      <Container maxWidth="xs">
        <Switch>
          <Route path="/detail/:id" component={pages.Detail} />
          <Route path="/" component={pages.Home} />
        </Switch>
      </Container>
    </Router>
  );
}
