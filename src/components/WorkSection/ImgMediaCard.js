import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
    console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.imageAlt}
          height="140"
          image={props.imageURL}
          title={props.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titleText}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="left">
            {props.subText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button component={Link} to={"/projects/"+props.linkURL} size="small" color="primary">
        Read More
        </Button>
      </CardActions>
    </Card>
  );
}