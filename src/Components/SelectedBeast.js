import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {


    render() {
        return (
            <Modal  centered  size="lg" show={this.props.showing}>
            <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
             {this.props.beast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Card.Img  src={this.props.beast.image_url} alt="alt" />
            <p>{this.props.beast.description}</p>
            
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal >
            
        )
    }
}

export default SelectedBeast;