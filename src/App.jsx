/* eslint-disable no-trailing-spaces */

import React from 'react';
import './App.css';
import data from './components/assets/data.json';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

  render() {
    return (
      <div>

        <Header />
        <Main 
		data = {data} // send data to the main Component 
		 SelectedBeast = {SelectedBeast}/>
        <Footer />
        
      </div>
    );
  }
}


export default App;
