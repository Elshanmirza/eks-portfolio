// es 6 const let ; arrow function ()=>  `${}`
// es7 (2017) import export

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Contactus from './components/Contactus';
import Experience from './components/Experience';
import Services from './components/Services';


function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <Aboutme />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa500" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <Experience />
    <Services />
    <Contactus/>
    </div>
    
  );
}

export default App;
