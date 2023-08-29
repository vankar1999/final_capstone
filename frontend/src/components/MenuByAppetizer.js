import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './MenuDetails.css'

export default function MenuByAppetizer({ selectedCategory, menuItems }) {

    //TBD if this is needed
    useEffect(() => {
        deleteMenuItem();
      }, []);
    
    const path = "http://localhost:5000/api";
    const [currentMenuItems, setCurrentMenuItems] = useState([]);

    const deleteMenuItem = async id => {
    const data = await fetch(`${path}/menuitems/`+ id, {method: "DELETE"})
        .then((menuItemsResponse) => menuItemsResponse.json());

    setCurrentMenuItems(currentMenuItems => currentMenuItems.filter(currentMenuItems => currentMenuItems._id !== data.id))
    }

    const menuByAppetizer = menuItems.filter(item => item.category === selectedCategory);

    return (
        <div>
             
            <div className="menu-card row row-cols-2 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 g-4">
                
                {menuByAppetizer.map((item) => (
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
                                    <EditButton />
                                </div>
                                <div onClick={() => deleteMenuItem(item._id)}>
                                    <DeleteButton />
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}


