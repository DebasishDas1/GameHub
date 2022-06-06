import { Routes, Route} from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import Home from './pages/Home';
const Sanke = lazy(() => import('./pages/Snake'));
const TicTacToe = lazy(() => import('./pages/TicTacToe'));
const RockPaperSessor = lazy(() => import('./pages/RockPaperSessor'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/RockPaperSessor" element={<RockPaperSessor/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>} />
        <Route path="/Sanke" element={<Sanke/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
