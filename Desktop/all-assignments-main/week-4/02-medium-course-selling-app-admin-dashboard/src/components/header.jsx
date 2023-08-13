import React from 'react'
import viteLogo from '/vite.svg'
import SearchBar from './search'
import Login from './login';
import Button from '@mui/material/Button';


function Header() {
  return (    
<header className="navbar">
    <img src={viteLogo} class="logo" alt="My Company" />
      <h1 class = "title">SkillSpire</h1>
      <p class="slogan">Rise to New Heights of Expertise</p>
<SearchBar />
    </header>

    
  );
}

export default Header;
