
import React from 'react';
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
	render() {
		console.log(this.props);
		return (


			<Modal show={this.props.show} onHide={this.props.hideModal}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>

					<img style={{ width: '18rem' }}
						src={this.props.image_url}
						alt={this.props.title} />

					<p>{this.props.description}</p>

				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.hideModal}>
						Close
					</Button>

				</Modal.Footer>
			</Modal>



		);
	}
}
export default SelectedBeast;
