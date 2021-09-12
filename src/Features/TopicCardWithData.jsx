import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { QUERY_GET_TOPIC } from './queries'
import TopicCard from '../components/TopicCard'

export default function TopicCardWithData({ topic, changeTopic }) {
  const { data, loading, error } = useQuery(QUERY_GET_TOPIC, {
    variables: {
      topic,
    },
  })

  return <TopicCard data={data} loading={loading} error={error} onRelatedClick={changeTopic} />
}

TopicCardWithData.propTypes = {
  topic: PropTypes.string.isRequired,
  changeTopic: PropTypes.func.isRequired,
}
