import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'

export default function Error({ message, classes }) {
  return (
    <Card className={classes.container ?? ''} elevation={4} raised>
      <CardContent className={classes.errorContainer ?? ''}>
        <Typography variant="h4" color="error">
          {`There's been an error, please try reloading the page (${message})`}
        </Typography>
      </CardContent>
    </Card>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}
