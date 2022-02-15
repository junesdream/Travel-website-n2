import React from 'react';
import Contact from './components/contact/Contact';
import Marble from './components/jungle/Jungle';
import Navbar from './components/navbar/Navbar';
import Snow from './components/snow/Snow';
import Soil from './components/soil/Soil';
import Water from './components/water/Water';
import Wood from './components/wood/Wood';
import Jungle from './components/jungle/Jungle';
import Account from './components/account/Account';




function App() {
  return (
   <>
     <Navbar />
     <Wood />
     <Water />
     <Marble />
     <Soil />
     <Snow />
    <Jungle />
     <Contact />
     <Account />
   
   </>
  );
}

export default App;
