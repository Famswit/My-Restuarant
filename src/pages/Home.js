import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import '../styles/HomeStyles.css';
import Background from '../images/background.jpg'

const Home = () => {
  return (
    <Layout>
       <div className='home' style={{backgroundImage:`url(${Background})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p> Best Food Vendor in Lagos</p>
          <Link to={"/menu"}>
          <button>ORDER NOW</button>
          </Link>
        </div>
       </div>
        </Layout>

  )
}

export default Home