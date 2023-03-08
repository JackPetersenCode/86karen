import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Restaurants from './pages/restaurants';
import HomeServices from './pages/homeServices';
import AutoServices from './pages/autoServices';
import More from './pages/more';
import Layout from './pages/Layout';
import SearchResults from './pages/searchResults';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Restaurants" element={<Restaurants />} />
            <Route path="HomeServices" element={<HomeServices />} />
            <Route path="AutoServices" element={<AutoServices />} />
            <Route path="More" element={<More />} />
            <Route path=":input" element={<SearchResults />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )};

export default App;
