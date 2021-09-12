import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CircularProgress, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from './CardHeader'
import RelatedTopics from './RelatedTopics'
import Error from './Error'

const useStyles = makeStyles((theme) => {
  return {
    container: {
      [theme.breakpoints.up('sm')]: {
        width: '35%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      minHeight: theme.spacing(13), //* About 100px
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
      margin: theme.spacing(1),
      padding: theme.spacing(1),

      '&:last-child': {
        paddingBottom: 0,
      },
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
    return <Error message={error.message} classes={classes} />
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
