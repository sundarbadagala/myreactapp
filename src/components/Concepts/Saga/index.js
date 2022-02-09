import React from 'react'
import Mobile from './components/mobileDetails'
import Users from './components/usersDetails'
import Details from './components/dataDetails'
import Todo from './components/todoDetails'
import {Provider} from 'react-redux'
import store from './redux/store/store'

function App() {
  return (
    
    <Provider store={store}>
      <Mobile/>
      <hr/><br/><hr/>
      <Users/>
      <hr/><br/><hr/>
      <Details/>
      <hr/><br/><hr/>
      <Todo/>
    </Provider>
  );
}

export default App;
