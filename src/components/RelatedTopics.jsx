import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  chip: {
    bacgroundColor: theme.palette.info.main,
    margin: theme.spacing(0.5),
  },
}))

export default function RelatedTopics({ topics }) {
  const classes = useStyles()
  return (
    <>
      {topics.map(({ name }) => (
        <Chip className={classes.chip} clickable key={name} label={name} />
      ))}
    </>
  )
}

RelatedTopics.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
}
