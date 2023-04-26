import React from 'react'
import './User.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UserList from './UserList'


const Users = () => {
   
  return (
    <div className='home-contanier-1 list-div' >
        <LeftSidebar />
        <div className= 'home-contanier-2 list-sec-div'> 
            <h1 style={{fontWeight: "400" , marginTop: "30px"}}>Users</h1>        
            <UserList/> 
   
        </div>
    </div>
  )
}

export default Users