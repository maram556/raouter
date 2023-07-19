
import './App.css';
import { useRef, useState } from 'react';

import { Routes,Route} from 'react-router-dom';
import Home from './Home';
import Description from './components/Description';

function App() {


  return (

       

      <Routes>
       <Route  path='/' element={<Home />} />
       <Route  path='/description/:id' element={<Description />} />

       </Routes>

  );
}

export default App;
