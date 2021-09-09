import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
  },
})

export default function Wrapper({ children }) {
  const classes = useStyles()

  return <div className={classes.container}>{children}</div>
}
