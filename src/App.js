import React from 'react';
import './App.css';

import Notifikasiheader from './Panelnotfikasi'
import Kontenhead from './Kontenhead'
import Kontenisi from './Kontenisi'
import Footer from './Foot'
import Panelbawah from './Panelbawah'

function App() {
  return (
    <div className="App">
      <Notifikasiheader />
      <Kontenhead />
      <Kontenisi />
      <Footer />
      <Panelbawah />
    </div>
  );
}

export default App;
