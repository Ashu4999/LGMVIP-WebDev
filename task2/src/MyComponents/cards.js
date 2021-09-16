import React from "react";
import './cards.css';
import {Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
export default function Cards(props){
    return(
        <div className="cards">
            {props.cardInfo.map((user, index) => {
                return(
                    <Card style={{width: "18rem"}}>
                        <Card.Img variant="top" src={user.avatar}/>
                        <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>{user.first_name} {user.last_name}</li>
                                    <li>{user.email}</li>
                                    <Button variant="info" id="btn">View</Button>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}
