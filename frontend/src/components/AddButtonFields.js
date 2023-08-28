import React from 'react';
import Card from 'react-bootstrap/Card';
import './AddButtonFields.css'


// export default function AddButtonFields ({selectedCategory}) {
//     return (
//         <>
//         {selectedCategory ?

//         <div className="mountain-card">
//             <Card style={{ width: '30rem' }}>
//                 <Card.Img variant="top" src={`/assets/images/mountains/${selectedMountain.img}`} alt={`picture of ${selectedMountain.name}`} />
//                 <Card.Body>
//                 <Card.Title>{selectedMountain.name}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">Elevation: {selectedMountain.elevation}</Card.Subtitle>
//                 <Card.Text>
//                     {selectedMountain.desc}
//                 </Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>

//         : null}
//         </>
//         ); 
// } 

export default function AddButtonFields () {
    return (
        <div className="xxx">
            <form> 
                <div>
                    <div>
                    <label for="Image">Image:</label>
                    <input type = "text" id = "Image" name = 'Image' maxLength = "20"/>
                    </div>
                    <div>
                    <label for="Name">Name:</label>
                    <input type = "text" id = "Name" name = 'Name' maxLength = "20"/>
                    </div>
                    <div>
                    <label for="Category">Name:</label>
                    <input type = "text" id = "Category" name = 'Category' maxLength = "10"/>
                    </div>
                    <div>
                    <label for="Price">Name:</label>
                    <input type = "text" id = "Price" name = 'Price' maxLength = "8"/>
                    </div>
                    <div>
                    <label for="Ingredients">Name:</label>
                    <input type = "text" id = "Ingredients" name = "Ingredients" maxLength = "30"/>
                    </div>
                </div>
            </form>

        </div>
    );
}
