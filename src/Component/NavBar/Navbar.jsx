import React, { useState } from 'react'
import '../NavBar/Navbar.css'
import searchIcon from '../../Assets/search.png';
import {Link} from 'react-router-dom';
import Categories from '../../Pages/Categories';
const Navbar = () => {

    const[search, setSearch] = useState('');

    const handleInputVal = (event) =>{
      if(event.key==="Enter"){
        setSearch(event.target.value);
        <Categories type={event.target.value}/>
      }  
    };

  return (
    <div>
      <div className="nav">
        <div className="logoContent">
            <p className='content'>News.Web</p>
        </div>
        <div className="searchBox">
            <input type="text" placeholder='Search' value={search} onChange={handleInputVal}/>
            <img src={searchIcon} alt=""/>
        </div>
        
        <div className="listMenu">
            <ul className="list">
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/news" className='link'>News</Link></li>
                <li><Link to="/health" className='link'>Health</Link></li>
                <li><Link to="/sports" className='link'>Sports</Link></li>
                <li><Link to="/tech" className='link'>Technology</Link></li>
                <li><Link to="/science" className='link'>Science</Link></li>

            </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
