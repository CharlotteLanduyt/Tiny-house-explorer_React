import { Outlet } from 'react-router-dom'; // Importing Outlet for nested routing in React Router
import Header from './Base/Header'; // Importing Header component
import Nav from './Base/Nav'; // Importing Nav component
import Footer from './Base/Footer'; // Importing Footer component

// Animation configurations
import animations from '../javascript/motion';


function App() {
    return (
        <div className="App">
            {/* Navigation with animations passed as props */}
            <Nav />

            <main>
                <Outlet /> {/* Placeholder for nested routes content */}
                <Header />
            </main>

            <Footer />

            {/* Background texture element */}
            <div id='texture'></div>
        </div>
    );
}

export default App;
