import React from 'react';
import Card from 'react-bootstrap/Card';
import './MenuDetails.css'


export default function MenuDetails () {
    return (
        
        <div className="menu-card">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Chicken_lollipop_in_Goa.jpg" alt="picture of chicken lollipop" />
                <Card.Body>
                <Card.Title>Chicken Lollipop</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Price: $10.99</Card.Subtitle>
                <Card.Text>
                    This is a chicken lollipop.
                </Card.Text>
                
                <a href="#" class="btn btn-primary edit-btn">Edit</a>
                
                <a href="#" class="btn btn-secondary delete-btn">Delete</a>
                
                </Card.Body>

            </Card>
        </div>
     ); 
} 