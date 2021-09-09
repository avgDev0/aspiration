import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function Wrapper({ children }) {
  const classes = useStyles()

  return <div className={classes.container}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
