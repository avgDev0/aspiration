import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    height: '30%',
    width: '100%',
    margin: theme.spacing(2),
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.info.main,
  },
  stargazerCount: {
    flexBasis: 'auto',
    fontWeight: 'bold',
  },
}))

export default function CardHeader({ topic, stargazerCount }) {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.header} container alignItems="center">
        <Grid item xs={1}>
          <Avatar className={classes.avatar}>{topic.charAt(0).toLowerCase()}</Avatar>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5">{topic}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.stargazerCount}>{`Starred ${stargazerCount} ${
            stargazerCount > 1 ? 'times' : 'time'
          }`}</Typography>
        </Grid>
      </Grid>
    </>
  )
}

CardHeader.propTypes = {
  topic: PropTypes.string.isRequired,
  stargazerCount: PropTypes.number.isRequired,
}
