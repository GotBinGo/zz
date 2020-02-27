import React, {Component} from 'react';
import './App.css';
import Title from './components/title';
import Chart from './components/charts';

//imported the required files

//API key for access to apixu API
const key = '2b08e16a3c7349ac94360638191404';

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
