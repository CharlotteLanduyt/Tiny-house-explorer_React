import './style/App.sass';

import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/'} id="logo"> Logo </NavLink>

        <p>
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <h1>
          <p>MY SUPER TITLE IS COOL</p>
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
