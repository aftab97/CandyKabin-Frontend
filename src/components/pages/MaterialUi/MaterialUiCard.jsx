import React, { useState } from "react";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import kingOfCandy from "../../../img/king-of-candy-new-new.jpeg";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const MaterialUiCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root2}>
        <CardHeader
          title="Welcome to Candy Kabin"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={clsx(classes.media, classes.kingOfCandy)}
          image={kingOfCandy}
          title="Welcome to Candy Kabin"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Candy Kabin are proud to be one of the UK’s biggest suppliers of
            international confectionary.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              From a variety of sweets and snacks we are proud to stock products
              from the USA, Sweden, Canada and much much MORE! We have a huge
              range of Sodas, Candy, Chocolate & Snacks to satisfy your
              cravings! And it doesn’t stop their. We have designed a one stop
              shop to cater for everyone including adults to help regress them
              back to their childhood! With over 100 pick and mix sweets thier
              is something for everyone at Candy Kabin!
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
