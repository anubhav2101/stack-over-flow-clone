import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from './Pages/Auth/Auth'

import Home from './Pages/Home/Home'
import Questions from './Pages/Questions/Questions'
import AskQuestions from './Pages/AskQuestions/AskQuestions'
import DisplayQuestions from './Pages/Questions/DisplayQuestions'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserPorfile from './Pages/userProfile/UserProfile'


const AllRoutes = () => {

  return (
    <Routes>
      <Route 
      path='/' 
      element={<Home/>} />
      <Route 
      path='/Auth' element={<Auth />} />
      <Route
       path='/Questions'
       element={<Questions/>} />
      <Route path='/AskQuestions' element={<AskQuestions/>} />
      <Route 
      path='/Questions/:id' 
      element={<DisplayQuestions/>} />
      <Route
       path='/Tags'
       element={<Tags/>} />
      <Route 
      path='/User'
       element={<Users/>} />
      <Route
       path= '/User/:id'
        element={<UserPorfile/>}/>
    </Routes>
  )
}

export default AllRoutes