import React, {useState, useEffect} from 'react';
import backgroundImage from '../assets/images/bg.jpg';
import logo from '../assets/images/son_logo.jpeg';
import {motion} from 'framer-motion';
import {db} from '../Firebase/Firebase';
import ClearIcon from '@material-ui/icons/Clear';

function Home() {
  const [verifySerial, setVerifySerial] = useState('');
  const [verifiedProduct, setVerifiedProduct] = useState(null);
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    db.collection('products').onSnapshot(snapshot => {
      setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
  }, []);


  const verify = () => {
    const checkProduct = products.filter(product => product.serial === verifySerial);
    if(checkProduct.length > 0){
      setVerifiedProduct(checkProduct[0])
    }else{
      setVerifiedProduct(null)
    }
  }
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute w-screen inset-0 h-screen">
          <img className="absolute w-full h-full object-cover" src={backgroundImage} alt="search background" />
          <div className="absolute inset-0 bg-green-500 bg-opacity-50"></div>
      </div>
      <div className="relative inset-0 bg-white top-60 w-72 h-64 pt-8 rounded-xl shadow-2xl">
        <img className="mx-auto" src={logo} alt="son logo" />
        <button className="bg-green-700 py-2 px-16 mt-8 text-white mx-auto block rounded-md cursor-pointer" onClick={()=> setShowVerifyForm(true)}>Verify product</button>
      </div>
      {showVerifyForm && <motion.div initial={{right: -1000}} animate={{right: [-1000, 0]}} className="absolute pl-8 top-0 w-screen h-screen bg-white">
        <div onClick={()=> setShowVerifyForm(false)} className="mt-8 cursor-pointer"><ClearIcon /></div>
        <h1 className="text-2xl font-semibold mt-4">Verify Product</h1>
        <div className="flex mt-4 items-center ">
          <div className="flex-1">
            <p>Enter product serial number</p>
            <input value={verifySerial} onChange={(e)=> setVerifySerial(e.target.value)} className="p-2 border-2 border-gray-500 mt-4 w-3/4" type="text" placeholder="serial number" /><br />
            <button onClick={verify} className="bg-blue-500 text-white p-2 mt-4 w-3/4">verify</button>
          </div>
          <div className="flex-1">
            {verifiedProduct ? <div>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Product Name: {verifiedProduct.name}</p>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Company: {verifiedProduct.manufacturer}</p>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Company Address: {verifiedProduct.address}</p>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Production date: {verifiedProduct.manufactureDate}</p>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Expiration Date: {verifiedProduct.expirationDate}</p>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Registration Date: {verifiedProduct.registrationDate}</p>
              <p className="p-2 mb-2 font-semibold bg-blue-200 w-11/12">Serial Number: {verifiedProduct.serial}</p>
            </div> : <h1 className="bg-red-200 text-red-700 p-2 py-4 w-11/12 text-center font-bold">Not Record Found, product has not been registered</h1>}
          </div>
        </div>
      </motion.div>}
    </div>
  )
}

export default Home
