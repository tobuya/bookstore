import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BooksList from './components/BooksList';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/categories" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
