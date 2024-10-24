import './style/App.sass';

import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';


function App() {
  return (
    <div className="App">
      <div id='texture'></div>
      
      <nav>
        <NavLink to={'/'} id="logo"> My_Tiny </NavLink>

        <p>
          Taste happiness in a tiny world.
        </p>

        <h1>
          <p>GET YOUR WONDERFULL TINY HOME</p>
          <button>EXPLORE OUR PRODUCTS</button>
        </h1>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <a href="">Facebook</a>
        <a href="">Linkedin</a>
        <a href="">Instagram</a>
      </footer>

    </div>
  );
}

export default App;
