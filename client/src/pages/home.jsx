import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import SearchBar from '../components/searchBar';
import '../all.css';
import { handleError, handleSuccess } from '../utils';
const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <SearchBar/>
    </div>
  )
}

export default Home;