import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Pdf from './Component/Pdf';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Pdf />
    </div>
  );
}

export default App;
