import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MainComponent, Header, Footer } from './components/content';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header title="My Header in another component"/>
        <MainComponent/>
        <Footer title="My Footer in another component"/>
      </div>
    );
  }
}

//export default App;
