import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CategoryCard from './category_card'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))

const Index  = ({categories, onCategoryChange}) => {
 
  return (
    <div >
        <Grid container spacing={0}>
          <Carousel
            plugins={[
              'clickToChange',
              'infinite',
              ,
              {
                resolve: slidesToShowPlugin,
                  options: {
                  numberOfSlides: 2
                }
              },
            ]}
          >
            {
              categories.map((category, index) => {
                return (
                  <Grid item xs={12} md={3}  key={index}>
                    <CategoryCard category={category} onCategoryChange={cat => onCategoryChange(cat)}/>
                  </Grid>
                )
              })
            }
          </Carousel>
        </Grid>
    </div>
  )
}

export default  Index