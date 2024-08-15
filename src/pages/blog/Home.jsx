import React from 'react'
import Navbar from '../../Components/Navbar'
import Layout from '../../layout/Layout'
import Card from './components/Card'

const Home = () => {
  return (
  <>
  <Layout>
 <div className='flex flex-wrap justify-center space-x-5 mt-4' >
 <Card />
 <Card />
 <Card />
 <Card />
 <Card />
 </div>
 </Layout>
  </>

  )
}

export default Home