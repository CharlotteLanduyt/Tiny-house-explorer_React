import './style/App.sass';

import { NavLink,  useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';

import { AnimatePresence, motion } from 'framer-motion';

import Home from './components/Home';


function App() {
  let {id} = useParams()
  
  
  return (
    <div className="App">
      <div id='texture'></div>

      <nav>
        <NavLink to="/" id="logo"> 
          My_Tiny
        </NavLink>

        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          Taste happiness in a tiny world.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
            <p>GET YOUR WONDERFULL TINY HOME</p>
            
            <NavLink to="about_us">EXPLORE OUR PROJECT</NavLink>
            <NavLink to="contact">CONTACT</NavLink>
        </motion.h1>
      </nav>

      <main>
        <Outlet />

        <Home />
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >

        <a href="">Facebook</a>
        <a href="">Linkedin</a>
        <a href="">Instagram</a>

      </motion.footer>

    </div>
  );
}

export default App;
