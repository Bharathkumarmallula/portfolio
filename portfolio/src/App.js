import Intro from "./components/Intro/Intro";
import { Navibar } from "./components/NaviBar/Navibar";
import Skills from "./components/Skills/Skills";
import Work from './components/Works/Work';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footerr/Footer";


function App() {
  return (
    <div>
     <Navibar/>
     <Intro/>
     <Skills/>
     <Work/>
     <Contact/>
<Footer/>
    </div>
  );
}

export default App;
