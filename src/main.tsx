import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import 'styled-components/cssprop'
import { ThemeProvider } from 'styled-components'

// components
import App from './components/App'

// styles
import { lightTheme, darkTheme } from './styles/themes'

const activeTheme = darkTheme

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={activeTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
