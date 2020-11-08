import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  paper: {
    textAlign: 'center',
  },

});

const Index = ({category, onCategoryChange}) => {

  const classes = useStyles()

  return (
    <Card className={classes.root} >
      <CardActionArea onClick={()=> onCategoryChange(category)}>
        <CardMedia
          className={classes.media}
          image={category.category_image}
          title={category.category_name}
        >
            <CardContent className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2"  style={{ color: 'white' }}>
                    {category.category_name}
                </Typography>
            </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  )
}

export default Index
