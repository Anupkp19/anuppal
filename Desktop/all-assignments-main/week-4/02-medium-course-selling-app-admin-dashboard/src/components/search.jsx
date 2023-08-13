import React, { useState } from 'react';
import Button from '@mui/material/Button';


const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            {/* <span className="visually-hidden">Search blog posts</span> */}
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for courses"
            name="s" 
            className='search'
        />
        <Button className="imp-button" type="submit">
      Search</Button>
      <Button className="diff" >LOGIN
</Button>
<Button className="diff" >Courses
</Button>
<Button className="diff">About
</Button>
    </form>
);

export default SearchBar;
