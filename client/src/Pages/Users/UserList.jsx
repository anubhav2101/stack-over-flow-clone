import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../../actions/users'

import User from './User'

const UserList = () => {
  const users = useSelector((state) => state.usersReducer)
  const dispatch=useDispatch()

  React.useEffect(()=>{
    dispatch(fetchAllUsers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className=' user-list-container'>
      {users?.map((user)=>(
          <User user={user} key={user?._id}/>
      ))
      }
    </div>
  )
}

export default UserList