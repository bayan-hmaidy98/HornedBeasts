/* eslint-disable no-trailing-spaces */

import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './components/assets/data.json';
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			shown: false,
			title: null,
			description: null, 
			image_url: null
		};
	}
	modalData = (title, description, image_url) => {
		this.setState({
			title: title,
			description: description,
			image_url: image_url
		});
	}

	UpdateTheModel = () => {
		this.setState ({
			shown: !this.state.shown
		});
	}
	

  render() {
    return (
      <div>

        <Header />
		<SelectedBeast
		shown = {this.state.shown}
		title = {this.state.title}
		description = {this.state.description}
		image_url = {this.state.image_url}
		updateModel = {this.UpdateTheModel}
		modalData={this.modalData}
		 />
        <Main
		Data={Data} 
		updateModel = {this.UpdateTheModel}
		modalData={this.modalData}
		/>
        <Footer />
        
      </div>
    );
  }
}


export default App;
