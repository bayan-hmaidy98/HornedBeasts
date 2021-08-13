/* eslint-disable no-trailing-spaces */

import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './components/assets/data.json';
import HornsForm from './components/HornsForm';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			show: false,
			title: null,
			description: null, 
			image_url: null
		};
	}
	modalData = (title, description, image_url) => {
		this.setState({
			title: title,
			image_url: description,
			description: image_url,
			

		});

	}


	showModal = () => {
		this.setState({
			show: true,
		});
		
	}
	hideModal = () => {
		this.setState({
			show: false,

		});

	}
	updateTheNumber = (submittedNumber) => {
		let number = Data.filter(item => {
			if (item.horns === submittedNumber) return item;
			// else if (number.horns === "All") return item; 
			
		});
		this.setState({
			submitted: number
		});
	}

  render() {
	  console.log(this.state.image_url);
    return (
      <div>

        <Header />
		<HornsForm 
		updateTheNumber = {this.updateTheNumber}/>
		<SelectedBeast 
		show= {this.state.show}
		title= {this.state.title}
		description= {this.state.description}
		image_url= {this.state.image_url}
		hideModal= {this.hideModal}

		 />
        <Main 
		Data={Data} 
		showModal= {this.showModal}
		modalData={this.modalData}

		/>
        <Footer />
        
      </div>
    );
  }
}


export default App;
