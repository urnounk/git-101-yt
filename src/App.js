import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import './App.css';
import Nav1 from './Nav1'
import Bestseller from './bestseller'
import Buy1Get1 from './buy1get1'; 


function App() {
  const [activeTab, setActiveTab] = useState('bestseller');
  return (
    <div>
      <Nav1 setActiveTab={setActiveTab} />
      {activeTab === 'bestseller' && <Bestseller />}
      {activeTab === 'buy1get1' && <Buy1Get1 />}

    </div>
  );
}
export default App;
