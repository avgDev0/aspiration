import React from 'react'
import PropTypes from 'prop-types'
import { Chip, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  topicsContainer: {
    width: '100%',
    height: '100%',
  },
  title: {
    '&>span': {
      fontWeight: 'bold',
    },
  },
  chip: {
    bacgroundColor: theme.palette.info.main,
    margin: theme.spacing(0.5),
  },
}))

export default function RelatedTopics({ topics }) {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (topic) => history.push(topic)

  return (
    <Grid container className={classes.topicsContainer}>
      <Grid className={classes.title} item xs={6}>
        <Typography component="span">Related Topics</Typography>
      </Grid>
      <Grid item xs={12}>
        {topics.map(({ name }) => (
          <Chip
            className={classes.chip}
            clickable
            key={name}
            label={name}
            onClick={() => handleClick(name)}
          />
        ))}
      </Grid>
    </Grid>
  )
}

RelatedTopics.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
}
