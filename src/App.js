import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';

import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Bookmarks from './Pages/Bookmarks';
import About from './Pages/About';
import Tag from './Pages/Tag';
import TagList from './Pages/TagList';
import Quiz from './Pages/Quiz';
import { cardsArr } from './data';


function App() {
  const [cards, setCards] = useState(cardsArr)


  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <main className='main-container'>
          <Routes>
            <Route path="/" element={
              <Home cards={cards} setCards={setCards} />}></Route>
            <Route path="/bookmarks" element={<Bookmarks cards={cards} setCards={setCards} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/tags/:tag" element={<Tag cards={cards} />}></Route>
            <Route path="taglist" element={<TagList cards={cards} />}></Route>
            <Route path="/quiz" element={<Quiz cards={cards} />}></Route>
            <Route path="*" element={<h1>404 - Page not found</h1>}></Route>
          </Routes>

        </main>

        <NavBar />
      </BrowserRouter>
    </div >

  );
}

export default App;
