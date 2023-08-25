import React from 'react';
import Card from 'react-bootstrap/Card';
import AddButton from './AddButton';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import './MenuDetails.css'
// import './ParkDetails.css';

export default function MenuByAppetizer({ selectedCategory, menuItems }) {

    const menuByAppetizer = menuItems.filter(item => item.category.includes(selectedCategory));

    return (
        <div>
            <>
                <AddButton />
            </> 
            <div className="menu-card">
                {menuByAppetizer.map((item) => (
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

        
        // <div className="tbd">
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Item Name</th>
        //                 <th>Price</th>
        //                 <th>Ingredients</th>
        //                 <th>Image</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {menuByAppetizer.map((item) => (
        //                 <tr key={item._id}>
        //                     <td>{item.itemName}</td>
        //                     <td>{item.price}</td>
        //                     <td>{item.ingredients}</td>
        //                     <td>{item.img}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>       
        // </div>
    );
}


