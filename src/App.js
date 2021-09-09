import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import Wrapper from './components/Wrapper'

const theme = createTheme({
  pallete: {
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
