import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background:'rgba(0, 0, 0, 0.39)',
border: '1px solid #000000',
boxSizing: 'border-box',
boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
width:'50%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    margin:'35px'
  },
  content: {
    flex: '1 0 auto',
    fontFamily: 'Rounded Elegance',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '24px',
lineHeight: '28px',
color: '#FFFFFF',


  },
  cover: {
    width: '249px',
  },
}));

export default function Events() {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div className="cardevents row">
    <Card className={classes.root}>
    <CardMedia
        className={classes.cover}
        image="./pics/gallerie/festivale/CI9A0792.jpg"
        title="Awards"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          JCC 2020
          </Typography>
          <Typography variant="subtitle1">
          Une edition exceptionnelle pour une annee exceptionelle  
          </Typography>
        </CardContent>
      </div>
    
    </Card>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          New offre
          </Typography>
          <Typography variant="subtitle1">
          consultez notre nouvelle collection et nos packs
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
    </div>
  );
}
