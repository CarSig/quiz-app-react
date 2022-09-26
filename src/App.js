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

const cardsArr = [
  {
    id: "b5db267b-3275-4a86-a9f4-e7f927d33ed0",
    question: "What is the capital of Botswana",
    answer: "Gaborone",
    tags: ["Africa", "Geography", "Capitol"],
    bookmarked: false,
  },
  {
    id: "8f76114b-c30c-411d-ad38-77ce69079eef",
    question: "What is the capital of Mexico",
    answer: "Mexico City",
    tags: ["North America", "Geography", "Capitol"],
    bookmarked: true,
  },
  {
    id: "8c74c87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "What is the capital of Croatia",
    answer: "Zagreb",
    tags: ["Europe", "Geography", "Capitol"],
    bookmarked: false,
  }, {
    id: "8c74sdc87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "What is the capital of Germany",
    answer: "Berlin",
    tags: ["Europe", "Geography", "Capitol"],
    bookmarked: false,
  },
];

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
            <Route path="*" element={<h1>404 - Page not found</h1>}></Route>
          </Routes>

        </main>

        <NavBar />
      </BrowserRouter>
    </div >

  );
}

export default App;
