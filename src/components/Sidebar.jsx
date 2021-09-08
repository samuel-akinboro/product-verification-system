import React from 'react'
import './components-styles/Sidebar.css'
import {NavLink} from 'react-router-dom'

function Sidebar({setShowRegistrationForm, setShowVerifyForm}) {
  return (
    <div className="side pt-8">
      <ul>
        <li onClick={()=>{
          setShowVerifyForm(false)
          setShowRegistrationForm(false)
        }}><NavLink to="/dashboard" activeClassName="active-page" exact>All products</NavLink></li>
        <li onClick={()=>{setShowVerifyForm(true); setShowRegistrationForm(false)}}><NavLink to="/verify" activeClassName="active-page">Verification</NavLink></li>
        <li onClick={()=>{setShowRegistrationForm(true); setShowVerifyForm(false)}}><NavLink to="/new-product-registration" activeClassName="active-page">Register product</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar
