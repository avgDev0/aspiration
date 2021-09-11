import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Card, Grid, CardHeader, CardContent, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  const PAPER_MIN_HEIGHT_QUANTITY = 13 //* About 100px

  return {
    container: {
      width: '45%',
      minHeight: theme.spacing(PAPER_MIN_HEIGHT_QUANTITY),
    },
  }
})

export default function TopicCard({ data, loading, error }) {
  const classes = useStyles()
  console.log({
    data,
    loading,
    error,
  })

  if (loading) {
    return <CircularProgress color="warning" />
  }

  return (
    <Paper className={classes.container} elevation={4}>
      <Card>
        <Grid container justifyContent="center" alignItems="center">
          <CardHeader title="test" />
          <CardContent>Testing content</CardContent>
        </Grid>
      </Card>
    </Paper>
  )
}

TopicCard.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}
