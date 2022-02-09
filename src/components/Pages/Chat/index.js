import React from 'react'
import Chat from './files/pages/Chat'
import {Provider} from 'react-redux'
import store from './files/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Chat/>
    </Provider>
  )
}

export default App
