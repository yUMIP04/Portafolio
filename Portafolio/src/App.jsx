import Navbar from './components/Navbar.jsx';
import AboutMe_Seccion from './components/AboutMe.jsx';
import Skills_Secc from './components/Skills.jsx';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <Navbar />
      
      <main className="w-full flex flex-col items-center gap-10">
        <AboutMe_Seccion />
        <Skills_Secc/>

      </main>
    </div>
  );
}

export default App;
