import React, {Component} from 'react';
import Header from './layout/Header';
import Calendar from './showcase/Calendar';

class App extends Component {
  render() {
    return <div>
      <Header/>
      <div className="container">
        <Calendar/>
      </div>
    </div>
  }
}

export default App;
