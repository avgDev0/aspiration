import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CircularProgress, Divider } from '@material-ui/core'
import CardHeader from './CardHeader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: '45%',
      minHeight: theme.spacing(24), //* About 200px
      display: 'flex',
      flexDirection: 'column',
    },
    paper: {
      width: '100%',
      height: '100%',
    },
    content: {
      flexGrow: 1,
      width: '100%',
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
    <Card className={classes.container} elevation={4} raised>
      <CardHeader topic={topicName} stargazerCount={stargazerCount} />
      <Divider variant="middle" />
      <CardContent className={classes.content}>test</CardContent>
    </Card>
  )
}

TopicCard.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}
