import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState, useMemo } from "react";

import { Back } from "../../components";
import FoodCarousel from "./Carousel";
import FoodInfo from "./Info";
import FoodPhoto from "./Photo";
import FoodTabArea from "./Tab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import useSWR from "swr";
import { axios } from "../../utils";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -20,
    zIndex: 50,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  tagList: {
    marginTop: 20,
    marginBotom: 15,
  },
  tag: {
    marginRight: 5,
  },
}));

export default function Detail() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const { id } = useParams();

  const fetcher = async (url, id) => {
    const res = await axios.get(`${url}${id}/`);
    return res.data;
  };
  const { data } = useSWR(["/shop/", id], fetcher);
  const infos = useMemo(() => {
    if (data) {
      const { infos } = data;
      return infos;
    }
    return [];
  }, [data]);
  const tabs = useMemo(() => {
    if (infos) {
      return infos.map((info) => info.tab);
    }
    return [];
  }, [infos]);
  const images = useMemo(() => {
    if (infos) {
      const photo = infos.filter((info) => info.tab === "사진");

      if (photo.length > 0) {
        return photo[0].info;
      }
    }
    return [];
  }, [infos]);

  return (
    <Grid
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <Back onClick={() => history.goBack()} />

      <FoodCarousel images={images} />

      <Paper className={classes.container} square>
        <Container className={classes.content}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Box fontWeight={700}>
                <Typography variant="h5" style={{ fontSize: 18 }}>
                  {data ? data.name : ""}
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <Grid container direction="row">
                <Grid item style={{ marginRight: 10 }}>
                  <Grid container direction="row" alignItems="center">
                    <VisibilityIcon
                      style={{
                        fontSize: 13,
                        color: grey[400],
                        marginRight: 5,
                        marginTop: -1,
                      }}
                    />
                    <Box fontWeight={500} color={grey[400]}>
                      <Typography style={{ fontSize: 11 }}>
                        {data ? data.views.toLocaleString() : 0}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box fontWeight={500} color={grey[600]}>
            <Typography style={{ fontSize: 14 }}>
              {data ? data.place : ""}
            </Typography>
          </Box>

          {data ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.tagList}
            >
              {data.tags.map((tag) => (
                <Grid item key={tag.id} className={classes.tag}>
                  <ButtonBase>
                    <Box fontWeight={500} color={grey[600]}>
                      <Typography
                        style={{ fontSize: 13 }}
                      >{`#${tag.name}`}</Typography>
                    </Box>
                  </ButtonBase>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </Container>

        <FoodTabArea index={index} setIndex={setIndex} tabs={tabs} />
      </Paper>

      {infos.length > 0 && infos[index].tab === "사진" ? (
        <FoodPhoto photos={images} />
      ) : null}

      {infos.length > 0 && infos[index].tab !== "사진" ? (
        <FoodInfo data={infos[index].info} />
      ) : null}
    </Grid>
  );
}
