import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/assets/data.json';
import SelectedBeast from './components/SelectedBeast';
import Container from 'react-bootstrap/Container';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: Data,
      showModel: false,
      selectedBeast: {},
    };
  }

  displayModal = (select) => {
    this.setState({
      showModel: true,
      selectedBeast: select,
    });
  };
  closeModal = () => {
    this.setState({
      showModel: false,
    });
  };

  render() {
    return (
      <Container fluid align='center'>
      
            <Header />
        
          <Main
            Data={Data}
            displayModal={this.displayModal}
            closeModal={this.closeModal}
          />
          <SelectedBeast
            selectedBeast={this.state.selectedBeast}
            show={this.state.showModel}
            close={this.closeModal}
          />
       
            <Footer />
         
      </Container>
    );
  }
}

export default App;