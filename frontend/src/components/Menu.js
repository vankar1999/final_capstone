import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
// import './Menu.css'


export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Appetizer', 'Entree', 'Dessert'];

  return (
    <div>
      <h1>Menu</h1>
      <img src="https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/seo/cad39ed25806987c88d2881af39a130e.jpg/public" alt="food"/>
      <form>
        <select onChange={(e) => {
          const c = categories?.find((x) => x === e.target.value);
          setSelectedCategory(c);
        }}>
          <option disabled="" value="">Select menu category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </form>

      <div className="mountain-card">
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Chicken_lollipop_in_Goa.jpg" alt="picture of chicken lollipop" />
                <Card.Body>
                <Card.Title>Chicken Lollipop</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Price: $10.99</Card.Subtitle>
                <Card.Text>
                    This is a chicken lollipop.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>


    </div>
    )
  }