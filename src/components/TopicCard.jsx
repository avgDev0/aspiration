import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CircularProgress, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from './CardHeader'
import RelatedTopics from './RelatedTopics'

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: '35%',
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
      width: 'auto',
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    errorContainer: {
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
})

export default function TopicCard({ data, loading, error }) {
  const classes = useStyles()
  if (loading) {
    return <CircularProgress color="secondary" />
  } else if (error) {
    return (
      <Card className={classes.container} elevation={4} raised>
        <CardContent className={classes.errorContainer}>
          <Typography variant="h4" color="error">
            {`There's been an error, please try reloading the page (${error.message})`}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  const {
    topic: { name: topicName, stargazerCount, relatedTopics },
  } = data

  return (
    <Card className={classes.container} elevation={4} raised>
      <CardHeader topic={topicName} stargazerCount={stargazerCount} />
      <Divider variant="middle" />
      <CardContent className={classes.content}>
        <RelatedTopics topics={relatedTopics} />
      </CardContent>
    </Card>
  )
}

TopicCard.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}
