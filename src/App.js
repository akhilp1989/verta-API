import React from 'react';
import SearchText from './Components/SearchText/SearchText-component'
import {  Route } from 'react-router-dom'
import OtherAPI from './Components/OtherAPI'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={SearchText} />
      <Route path='/other' component={OtherAPI} />

      
    </div>
  );
}

export default App;
