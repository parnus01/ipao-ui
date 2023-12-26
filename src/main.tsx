import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css'
import { MantineProvider, rem } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
    theme={{
      fontSizes: {
        xs: rem('16px'),
        sm: rem('20px'),
        md: rem('24px'),
        lg: rem('32px'),
        xl: rem('40px'),
      },
      lineHeights:{
        xs: '24px',
        sm: '32px',
        md: '36px',
        lg: '48px',
        xl: '56px',
      }
    }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
