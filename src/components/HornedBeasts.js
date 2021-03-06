/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberOfVotes: 0
		};
	}

	vote = () => {

	  this.setState({
	    numberOfVotes: this.state.numberOfVotes += 1
	  });
	//   this.props.hideModal();
	  this.props.showModal();
      this.props.modalData(
      this.props.title,
      this.props.image_url,
      this.props.description
    );
	}

	render() {
		// console.log(this.props);
	  return (
	    <div>

	      <Card style={{ width: '18rem' }}>
	        <Card.Img onClick={this.vote} variant="top" src={this.props.image_url} />
	        <Card.Body>
	          <Card.Title>{this.props.title}</Card.Title>
	          <Card.Text>
							{this.props.description} {this.state.numberOfVotes}❤️
	          </Card.Text>

	        </Card.Body>
	      </Card>
	    </div>
	  );
	}
}

export default HornedBeasts;
