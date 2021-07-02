import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            vote:0,
        }
    }

    vote=(event)=>{
        event.preventDefault();
        this.setState({
            vote: this.state.vote +1,
        })

    }

    render() {
        return (
                     <Card style={{ width: '18rem', margin: '1rem' , padding: '1rem' }}>
                     <Card.Img variant="top" src={this.props.img} />
                     <Card.Body>
                         <Card.Title>{this.props.title}</Card.Title>
                         <Card.Text>
                             <p>❤️ : {this.state.vote}</p>
                             {this.props.desc}

                         </Card.Text>
                         <Button onClick={this.vote} variant="primary">Vote</Button>
                         <Button onClick={this.props.modal} value={this.props.title}>View Beast</Button>
                     </Card.Body>
                 </Card>
                )
                

    }
}

export default HornedBeasts;
