
import './App.css';
import React from 'react';
import { MainComponent, Header, Footer, NavigationBar } from './components/content';
import {Create} from './components/create';
import {Read} from './components/read';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        {/* NavigationBar component sits at the top of every 
          * page, while other components are swapped accordingly. 
        */}
          <NavigationBar />
          {/* Three different pages of the Web Application.
          * 1 - Main Page that displays the MainComponent, Header and Footer.
          * 2 - /create Page that displays the Create component.
          * 3 - /read Page that displays the Read component.
          */}
          <Routes>
            <Route path="/" element={<div><Header /><MainComponent /><Footer /></div>} /> 
            <Route path="/read" element={<Read/>} />
            <Route path="/create" element={<Create/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

//export default App;
