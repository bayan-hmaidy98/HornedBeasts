import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Card.Img
            variant='top'
            src={this.props.selectedBeast.image_url}
            alt='img'
            title={this.props.selectedBeast.title}
          />

          <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.close}>
              Close
            </Button>
            <Button variant='primary' onClick={this.props.close}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;