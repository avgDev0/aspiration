import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { QUERY_GET_TOPIC } from './queries'
import TopicCard from '../../components/TopicCard'

export default function TopicCardWithData() {
  const { topic } = useParams()
  const { data, loading, error } = useQuery(QUERY_GET_TOPIC, {
    variables: {
      topic,
    },
  })

  return <TopicCard data={data} loading={loading} error={error} />
}
