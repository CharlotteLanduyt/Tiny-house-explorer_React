import './style/App.sass';

import { Outlet } from 'react-router';

import Home from './components/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { 
      duration: 1,
    },
  };
  
  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 1 }
  };

  return (
    <div className="App">
      <div id='texture'></div>


      <Nav slideInRight={slideInRight} fadeInUp={fadeInUp} />
      

      <main>
        <Outlet />

        <Home />
      </main>

      <Footer slideInRight={slideInRight} />

    </div>
  );
}

export default App;
