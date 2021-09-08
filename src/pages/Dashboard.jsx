import React, {useState} from 'react'
import {connect} from 'react-redux'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex items-center">
        <Sidebar setShowRegistrationForm={setShowRegistrationForm} setShowVerifyForm={setShowVerifyForm} />
        <Content setShowRegistrationForm={setShowRegistrationForm} showRegistrationForm={showRegistrationForm} setShowVerifyForm={setShowVerifyForm} showVerifyForm={showVerifyForm}/>
      </div>
    </div>
  )
}

export default connect((state => ({...state})))(Dashboard)
