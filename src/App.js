import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
    <Navbar/>
   <Home/>
   <Footer/>
    </>
  );
}

export default App;



// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(

// <Navbar tab="home" />

// );


// import * as ReactDOMClient from 'react-dom/client';
// import App from 'App';

// const container = document.getElementById('app');

// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// // Initial render: Render an element to the root.
// root.render(<App tab="home" />);

// // During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);
