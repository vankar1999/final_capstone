import React, { useState, useEffect } from 'react'
import MenuDetails from './MenuDetails'
//need to create Select Category component
import AddButton from './AddButton';
import './Menu.css'


export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // const path = "http://localhost:5000"

    fetch("http://127.0.0.1:5000/menuitems")
        .then(menuItemsResponse => menuItemsResponse.json())
        .then(data => {
            setMenuItems(data.menuItems);
        })
        .catch((err) => console.log(err))
    }, []);

  const categories = ['Appetizer', 'Entree', 'Dessert'];

  return (
    <div>
      <h1>Menu</h1>
      <img src="https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/seo/cad39ed25806987c88d2881af39a130e.jpg/public" alt="food" />

      {/* This is going to be the dropdown part of the page */}

      <form >
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
      
      <>
        <AddButton />
      </>
      <div >
        <MenuDetails />
      </div>
    </div>
  )
}