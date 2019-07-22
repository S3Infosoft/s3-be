import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Appcss from "../App.css";

const useStyles = makeStyles({
  card: {
    width: 850,
    maxWidth: 750
  },
  media: {
    height: 140
  }
});
function Cards(props) {
  const classes = useStyles();
  console.log(props.ele);
  return (
    <Grid container spacing={12}>
      <Grid item xs={4} style={{ width: "750px !important" }}>
        <br />
        <Container>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                image="data:image/jpeg;base64,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"
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Room Images
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ID:ai
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Cards;
