import React from 'react';
import './App.css';
import Title from './components/title';
import Chart from './components/charts';

//imported the required files

//main APP component
class App extends React.Component {
  state = {};

  render () {
    return (
      <div>
        <Title />
        <Chart />

      </div>
    );
  }
}

//exporting the APP module
export default App;
