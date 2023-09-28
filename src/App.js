
import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ingredients from './pages/Ingredients';
import Recipes from './pages/Recipes';

function App() {

  return (<div className="flex flex-col h-screen w-screen items-center">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/ingredients" element={<Ingredients/>}/>
              <Route path="/recipes" element={<Recipes/>}/>
          </Routes>
  </div>

  );
}

export default App;
