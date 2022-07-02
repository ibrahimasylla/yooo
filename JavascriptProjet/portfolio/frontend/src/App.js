import './App.css';
import React from 'react';
import './App.css';
import { NavBar } from './Component';
import { Nav } from './Component';

import { About, Footer, Header, Skills, Work, Testemonial } from './container';

// {
//   return (
//     <div className="App">
//       <About />
//       <Footer />
//       <Header />
//       <Skills />
//       <Work />
//       <Testemonial />
//       <NavBar />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <About />
      <Footer />
      <Header />
      <Skills />
      <Work />
      <NavBar />
    </div>
  );
}

export default App;
