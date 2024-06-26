import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
// import Contact from './components/';
import Start from "./components/Start";
// import Login from "./components/Login";
import SignIn from './components/SignIn';
import Student from "./components/Student";
import Teacher from "./components/Teacher";

function App() {
  return ( 
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Start />} />
        <Route path="/sign" element={<SignIn />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/student" element={<Student/>} />
        <Route path="/teacher" element={<Teacher/>} />
      </Routes>
      <Footer/>
    </Router>  
  </>
  );
}

export default App;
