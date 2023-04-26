import React , {useEffect} from "react";
import "./Navbar.css";
import { Link , useNavigate} from "react-router-dom";
import {useSelector , useDispatch } from 'react-redux'
import decode from "jwt-decode"


import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import Avatar from "../../components/Avatar/Avatar";
import setCurrentUser from "../../actions/currentUser";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var User =  useSelector ((state)=> (state.currentUserReducer));


  const handleLogout = (() =>{
    dispatch({type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  })
  
  useEffect (() => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <nav className="main-nav">
      <div className="navbar">
        
        <div className="navbar-1">
        <Link to="/" className ="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className ="nav-item mid-nav nav-btn ">
          About
        </Link>
        <Link to="/" className="nav-item mid-nav nav-btn ">
          Products
        </Link>
        <Link to="/" className="nav-item mid-nav nav-btn ">
          For teams
        </Link>
        <form >
          <input type="text" placeholder="Search.." />
          <img src={search} alt="icon" width="18px" className="search-icon"  
          />
        </form>
         </div>
         <div className="navbar-2">
        {User === null ? 
          <Link to="/Auth" className="nav-user-btn">
            Log in
          </Link>
         : 
          <>
              <Avatar backgroundColor="#009dff" px="10px" py="5px" borderRadius="50%" color="white"  > <Link to= {`user/${User?.result?._id}`} 
              style={{color:"white" ,textDecoration:"none" , fontWeight: "200" }}>
                {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
            <button  className="nav-user-btn" onClick={handleLogout}>Log Out</button>
          </>
        }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;