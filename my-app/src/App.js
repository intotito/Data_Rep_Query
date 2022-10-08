
import './App.css';
import React from 'react';
import { MainComponent, Header, Footer, NavigationBar } from './components/content';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<div><Header /><MainComponent /><Footer /></div>} />
            <Route path="/create" element={<Header />} />
            <Route path="/read" element={<Footer/>} />
          </Routes>

         


        </BrowserRouter>



      </div>
    );
  }
}

//export default App;
