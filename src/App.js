import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cv from './pages/Cv';
// import Portfolio from './pages/Portfolio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Cv /> } />
          {/* <Route path="/portfolio" element={ <Portfolio /> } /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
