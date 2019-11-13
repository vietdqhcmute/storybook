import React from 'react';

import Header from './components/Header/Header'
import Content from './components/Content/Content'
function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header></Header>
      </div>
      <div className="panel">
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
