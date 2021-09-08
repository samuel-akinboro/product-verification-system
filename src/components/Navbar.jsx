import React from 'react'
import "./components-styles/Navbar.css"
import {connect} from 'react-redux'

function Navbar({ dispatch}) {
  return (
    <nav className="flex justify-between items-center pl-8 py-4 w-full pr-16">
      <span className="text-blue-200 font-bold text-xl">Dashoard</span>
      <span className="text-white font-semibold cursor-pointer" onClick={()=> dispatch({
                type: 'SET_USER',
                userDetails: {displayName:""}
            })}>Log Out Admin</span>
    </nav>
  )
}

export default connect(state => ({...state}))(Navbar)
