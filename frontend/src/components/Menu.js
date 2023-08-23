import React, { useState, useEffect } from 'react'
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
    </div>
    )
  }