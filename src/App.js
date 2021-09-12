import React, { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Wrapper from './components/Wrapper'
import TopicCardWithData from './Features/TopicCardWithData'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1eaea',
    },
    secondary: {
      main: '#c5e1a5',
    },
    warning: {
      main: '#d32f2f',
    },
    info: {
      main: '#d1c4c4',
    },
  },
})

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_KEY

  return {
    headers: {
      ...headers,
      // eslint-disable-next-line multiline-ternary
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  const [topic, setTopic] = useState('react')
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <Wrapper>
          <TopicCardWithData topic={topic} changeTopic={setTopic} />
        </Wrapper>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
