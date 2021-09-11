import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Card, Grid, CardContent, CircularProgress, Divider } from '@material-ui/core'
import CardHeader from './CardHeader'
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
        <CardHeader topic={topicName} stargazerCount={stargazerCount} />
        <Divider variant="middle" />
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
