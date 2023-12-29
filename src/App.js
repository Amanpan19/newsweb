import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/NavBar/Navbar';
import Categories from './Pages/Categories';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';
import News from './Component/News/News';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/health' element={<Categories type="health"/>}/>
          <Route path='/sports' element={<Categories type="sports"/>}/>
          <Route path='/tech' element={<Categories type="technology"/>}/>
          <Route path='/science' element={<Categories type="science"/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
