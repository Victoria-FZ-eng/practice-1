import React from 'react';
import HornedBeasts from './HornedBeasts.js';
//import CardColumns from 'react-bootstrap/CardColumns';
//import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Main extends React.Component{
    render(){
        return(
            <Row  md={4} className="g-4">
            <Col>

                {this.props.arr.map((beast ,idx)=>(
                     <HornedBeasts img={beast.image_url} title={beast.title} desc={beast.description} horns={beast.horns} modal={this.props.modal}/>

                ))}

            </Col>
            </Row>
            
        )
    }
}

export default Main;