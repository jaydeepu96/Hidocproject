import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import DrugListTable from './DrugListTable';
import Footer from './Footer';
function App() {
  return (
    <div className="app_container">
    <Navbar />
    <DrugListTable/>
    <Footer/>
  </div>
  );
}

export default App;
