import React from 'react';
import {Card,Button, Form, InputGroup} from 'react-bootstrap';
import './Books.css';
import books from './books.jpg'




function Books (){
    return(
        <div className='bookdiv'>
            <h1>All Books</h1>
            <InputGroup>
                      <h2>Country</h2>
                      <Form.Control
                        as="select"
                        className="Filter"
                        id="Country"
                        custom
                      >
                        <option value="Country">Country...</option>
                        <option value="Egy">Egypt</option>
                        <option value="Jor">Jordan</option>
                        <option value="Leban">Lebanon</option>
                        <option value="Syria">Syria</option>
                      </Form.Control>
                      </InputGroup>
            <Card className = 'Card'>
                <Card.Img variant="top" src={books} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className = 'Card'>
                <Card.Img variant="top" src={books} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className = 'Card'>
                <Card.Img variant="top" src={books} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className = 'Card'>
                <Card.Img variant="top" src={books} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className = 'Card'>
                <Card.Img variant="top" src={books} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card className = 'Card'>
                <Card.Img variant="top" src={books} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );

}
export default Books