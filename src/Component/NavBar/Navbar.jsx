import React, { useState } from 'react'
import '../NavBar/Navbar.css'
import searchIcon from '../../Assets/search.png';
import {Link} from 'react-router-dom';


const Navbar = () => {

    const[search, setSearch] = useState('');

    // created for search operation, but need to do some other things as well
    const handleInputVal = (event) =>{
      if(event.key==="Enter"){
        console.log("button clicked");
        console.log(event.target.value);
        setSearch(event.target.value);
      }  
    };

  return (
    <div>
      <div className="nav">

        <div className="logoContent">
            <p className='content'>News.Web</p>
        </div>

        <div className="searchBox">
            <input type="text" placeholder='Search / Not Working ' onKeyDown={handleInputVal}/>
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
