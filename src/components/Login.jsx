import React, {useState} from 'react'
import {connect} from 'react-redux'
import googleLogo from '../assets/images/son_logo.jpeg'


function Login({dispatch, displayName}) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const handleClick = () => {
        if(userName === "admin" && password === 'admin123'){
            dispatch({
                type: 'SET_USER',
                userDetails: {displayName: userName}
            })
            console.log(userName, password)
            console.log(displayName)
        }else{
            setError(true);
            setTimeout(()=>{setError(false)}, 2000)
        }
    }

    return (
        <div className="bg-gray-100 h-screen w-screen absolute z-50 flex justify-center items-center">
            <div className="container bg-white p-4 w-96 shadow-lg rounded-xl flex flex-col h-96 justify-center">
                <img src={googleLogo} alt="google logo" className="w-32 mx-auto object-contain mt-4" />
                {error && <p className="bg-red-200 text-red-700 p-2 mx-8 mt-4">invalid login details</p>}
                <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder="Enter username" className="border-2 border-blue-300 mt-4 p-2 mx-8" />
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter password" className="border-2 border-blue-300 mt-4 p-2 mx-8" name="" id="" />
                <button 
                    className="bg-green-500 mx-auto py-2 px-16 mt-5 text-white rounded-full"
                    onClick={handleClick}
                >Login as Admin</button>
            </div>
        </div>
    )
}

export default connect((state)=> ({...state}))(Login)