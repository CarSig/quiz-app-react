import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';

import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Bookmarks from './Pages/Bookmarks';
import About from './Pages/About';

const cardsArr = [
  {
    id: "b5db267b-3275-4a86-a9f4-e7f927d33ed0",
    question: "What is the capital of Botswana",
    answer: "Gaborone",
    tags: ["Africa", "Geography", "Safari"],
    bookmarked: false,
  },
  {
    id: "8f76114b-c30c-411d-ad38-77ce69079eef",
    question: "What is the capital of Mexico",
    answer: "Mexico City",
    tags: ["Popocateptl", "Garibaldi", "Riviera Maya"],
    bookmarked: true,
  },
  {
    id: "8c74c87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "What is the capital of Croatia",
    answer: "Zagreb",
    tags: ["Dubrovnik", "Wine", "Sea"],
    bookmarked: false,
  }, {
    id: "8c74sdc87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "What is the capital of Germany",
    answer: "Berlin",
    tags: ["Dubrovnik", "Wine", "Sea"],
    bookmarked: false,
  },
];

function App() {

  const [cards, setCards] = useState(cardsArr)


  return (
    <div className="App">
      <Header />


      <main className='main-container'>,

        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Home cards={cards} setCards={setCards} />}></Route>
            <Route path="/bookmarks" element={<Bookmarks cards={cards} setCards={setCards} />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>

      </main>

      <NavBar />
    </div >

  );
}

export default App;
