import React from 'react' 
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'


const Home = () => {
  return (
    <div>
    <div className='home-contanier-1'>
      <LeftSidebar />
      <div className='home-contanier-2>'>
        <HomeMainbar/>
        <RightSidebar />
   
      </div>
      </div>
    </div>
  )
}

 export default Home
