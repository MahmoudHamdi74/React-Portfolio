import React from 'react'
import { LocaleProvider } from './hooks/LocaleContext'
import { AppRoutes } from './routes/index'

const App = () => {
  return (
    <LocaleProvider>
      <AppRoutes />
    </LocaleProvider>
  )
}

export default App
