import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Pdf from './Component/Pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PdfTwo from './Component/PdfTwo';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path='/' element={<Pdf />} />
          <Route path='/japan-design-format' element={<PdfTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
