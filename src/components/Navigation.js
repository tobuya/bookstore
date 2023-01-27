import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <p>profile icon</p>
  </nav>
);

export default Navigation;
