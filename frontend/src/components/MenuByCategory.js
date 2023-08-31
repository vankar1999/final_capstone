import React from 'react';
import Card from 'react-bootstrap/Card';
import AddButton from './AddButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './MenuDetails.css'

export default function MenuByCategory({ selectedCategory, menuItems, fetchMenu, categories }) {

    const menuByCategory = menuItems.filter(item => item.category === selectedCategory);
    console.log(menuByCategory)
    console.log({categories});
    console.log({selectedCategory})


    return (
        <div>  
            <div>
                <AddButton fetchMenu={fetchMenu} categories={categories} selectedCategory={selectedCategory}/>
            </div>   
            <div className="menu-card row row-cols-2 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 g-4">
                {menuByCategory.map((item) => (
                    <Card style={{ width: '20rem' }} key={item._id} className = "card2 h-150">
                        <Card.Img className="card-image" variant="top" src={`/assets/images/${item.img}`} alt={`picture of ${item.itemName}`} />
                        <Card.Body>
                            <Card.Title>{item.itemName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Price: {item.price}</Card.Subtitle>
                            <Card.Text>
                                {item.ingredients}
                            </Card.Text>
                        </Card.Body>
                        <div className="card-footer">
                            <div>
                                <div>
                                    <EditButton fetchMenu={fetchMenu} categories={categories} menuItems={menuItems} id={item._id}/>
                                </div>
                                <div> 
                                    <DeleteButton fetchMenu={fetchMenu} id={item._id}/>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}


