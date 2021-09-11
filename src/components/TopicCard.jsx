import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Card,
  Grid,
  Typography,
  Avatar,
  CardContent,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: '45%',
    },
    paper: {
      width: '100%',
      minHeight: theme.spacing(24), //* About 200px
    },
    header: {
      height: '30%',
      width: '100%',
    },
    content: {
      height: '70%',
      width: '100%',
    },
    avatar: {
      backgroundColor: theme.palette.info,
      margin: theme.spacing(2),
    },
  }
})

export default function TopicCard({ data, loading, error }) {
  const classes = useStyles()
  if (loading) {
    return <CircularProgress color="secondary" />
  }

  console.log({
    data,
    loading,
    error,
  })

  const {
    topic: { name: topicName, stargazerCount },
  } = data

  return (
    <Card className={classes.container} elevation={4}>
      <Paper className={classes.paper}>
        <Grid className={classes.header} container alignItems="center">
          <Grid item xs={1}>
            <Avatar className={classes.avatar}>{topicName.charAt(0).toLowerCase()}</Avatar>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5">{topicName}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{stargazerCount}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CardContent>Testing content</CardContent>
        </Grid>
      </Paper>
    </Card>
  )
}

TopicCard.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}
