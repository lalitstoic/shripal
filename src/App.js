import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Pdf from './Component/Pdf';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PdfTwo from './Component/PdfTwo';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Router>
        <nav className="bg-[#293d69] shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Design One
              </Link>
              <Link
                to="/japan-design-format"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Design Two
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Pdf />} />
          <Route path='/japan-design-format' element={<PdfTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
