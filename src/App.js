import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import FreeRegistration from './components/FreeRegistration';
import Scroll from './components/Scroll';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Scroll/> */}
     <BrowserRouter>
     <Header/>
      <ToastContainer autoClose={4000} position='top-right' />
      <Home/>
      {/* <FreeRegistration/> */}
      <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
