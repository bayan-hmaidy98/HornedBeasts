/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

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
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img onClick={this.vote} variant="top" src={this.props.image_url} />
							<Card.Body>
								<Card.Title>{this.props.title}</Card.Title>
								<Card.Text>
									❤️{this.props.description} {this.state.numberOfVotes}
								</Card.Text>

							</Card.Body>
						</Card>
					</Col>
				</Row>

			</div>
		);
	}
}

export default HornedBeasts;
