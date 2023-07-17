import { useEffect, useState } from 'react';

// import './App.css';
import CardComponent from '../components/CardComponents'
// import Navbar from './components/Navbar'

import getList from '../services/getLists';



function Blogs() {
    // var cards = [];
    const cards = [];
  
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getList()
        .then(items => {
          setItems(items)
        })
    }, [])
  
    for (var i = 0; i < items.length; i++) {
      cards.push(<CardComponent
        items={items[i]}
        key={items[i].id.toString()} />)
  
    }
  
    return (
  
      <div class="container">
        {/* <Navbar /> */}
        <div>
          <h2>Characters</h2>
          <div class="row">
          {cards}
        </div>
  
      </div>
    </div >
  
  );
  }
  
  
  export default Blogs;
  