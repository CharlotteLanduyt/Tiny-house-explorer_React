import './style/App.sass';

import { NavLink,  useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router';

import { AnimatePresence, motion } from 'framer-motion';


let closing_id = null

function App() {
  let {id} = useParams()
  if(id) closing_id = id
  
  
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
            <button>EXPLORE OUR PRODUCTS</button>
        </motion.h1>
      </nav>

      <main>
        <AnimatePresence mode="wait">
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Outlet context={{closing_id}}/>
              </motion.div>
          </AnimatePresence>
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
