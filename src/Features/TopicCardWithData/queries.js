import { gql } from '@apollo/client'

export const QUERY_GET_TOPIC = gql`
  query GetTopic($topic: String!) {
    topic(name: $topic) {
      name
      stargazerCount
      relatedTopics(first: 10) {
        name
      }
    }
  }
`
