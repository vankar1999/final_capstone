import React from 'react';
import Card from 'react-bootstrap/Card';
import AddButton from './AddButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './MenuDetails.css'

export default function MenuByEntree({ selectedCategory, menuItems }) {

    const menuByEntree = menuItems.filter(item => item.category === selectedCategory);

    return (
        <div>
            <>
                <AddButton />
            </> 
            <div className="menu-card">
                {menuByEntree.map((item) => (
                <Card style={{ width: '20rem' }} key={item._id}>
                    <Card.Img variant="top" src={`/assets/images/${item.img}`} alt={`picture of ${item.itemName}`} />
                    <Card.Body>
                    <Card.Title>{item.itemName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Price: {item.price}</Card.Subtitle>
                    <Card.Text>
                        {item.ingredients}
                    </Card.Text>
                        <EditButton />
                        <DeleteButton />
                    </Card.Body>

                </Card>
                ))}
            </div>
        </div>
    );
}


