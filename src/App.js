
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Header shopname="Apple Store" />
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
