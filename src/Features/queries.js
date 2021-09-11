import { gql } from '@apollo/client'

export const QUERY_GET_TOPIC = gql`
  query GetTopic($topic: String!) {
    topic(name: $topic) {
      name
      stargazerCount
      stargazers(first: 10) {
        nodes {
          name
          avatarUrl
        }
      }
    }
  }
`
