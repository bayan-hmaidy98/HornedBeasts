import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            numberOfVotes: 0
        }
    }

    vote = () => {
        this.setState ({
            numberOfVotes : this.state.numberOfVotes += 1
        }) ;
    }

    render() {
        return (
            <div>
                {/* <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img 
                onClick = {this.vote} 
                src= {this.props.image_url} 
                alt= {this.props.title} />

                <br />
                <p>
                ❤️ {this.props.numberOfVotes}
                </p>
                 */}
                
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick = {this.vote} variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        ❤️{this.props.description} {this.state.numberOfVotes}
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeasts;