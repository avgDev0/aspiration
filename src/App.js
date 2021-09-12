import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import { ApolloProvider } from '@apollo/client'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useApolloClient } from './hooks'
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

function App() {
  const apolloClient = useApolloClient()

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <CssBaseline />
        <Wrapper>
          <Switch>
            <Redirect exact from="/" to="/topic/react" push />
            <Route exact path="/topic/:topic" component={TopicCardWithData} />
          </Switch>
        </Wrapper>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
