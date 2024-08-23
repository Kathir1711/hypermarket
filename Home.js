import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map(product => (product.id}`}>{product.name}</Link>
          </li>
        )
      </ul>
    </div>
  );
}

export default Homer
Visual 