import React, {useState, useEffect} from 'react'
import './components-styles/Content.css'
import ClearIcon from '@material-ui/icons/Clear';
import {db} from '../Firebase/Firebase'
import { v4 as uuidv4 } from 'uuid';
import {motion} from 'framer-motion'

function Content({showRegistrationForm, setShowRegistrationForm, showVerifyForm}) {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [manufactureDate, setManufactureDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [address, setAddress] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [verifySerial, setVerifySerial] = useState('');
  const [verifiedProduct, setVerifiedProduct] = useState(null);
  // modals
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(()=>{
    db.collection('products').onSnapshot(snapshot => {
      setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    })
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(name && manufactureDate && expirationDate && address && manufacturer){
      db.collection('products').add({
        name,
        serial: uuidv4(),
        manufactureDate,
        expirationDate,
        address,
        manufacturer,
        registrationDate: new Date().toDateString()
      })
      setSent(true);
      setTimeout(()=>{setSent(false)}, 1500);
      setName('')
      setManufactureDate('')
      setExpirationDate('')
      setAddress('')
      setManufacturer('')
    }else{
      setError(true);
      setTimeout(()=>{setError(false)}, 1500);
    }
  }

  const verify = () => {
    const checkProduct = products.filter(product => product.serial === verifySerial);
    if(checkProduct.length > 0){
      setVerifiedProduct(checkProduct[0])
    }else{
      setVerifiedProduct(null)
    }
  }

  return (
    <div className='content bg-gray-50 relative'>
      <div className="content__container shadow-md p-4">
        <h1 className='font-semibold text-xl'>All registered Products</h1>
        <table className="shadow-md w-full overflow-x-scroll mt-8 border-collapse">
          <thead>
            <tr className="border-2">
              <th className="font-semibold p-2 border-2 text-green-900">S/N</th>
              <th className="font-semibold p-2 border-2 text-blue-700">Product <br /> Name</th>
              <th className="font-semibold p-2 border-2 text-blue-700">Manufacture Date</th>
              <th className="font-semibold p-2 border-2 text-blue-700">Expiration Date</th>
              <th className="font-semibold p-2 border-2 text-blue-700">Registration Date</th>
              <th className="font-semibold p-2 border-2 text-blue-700">Company Name</th>
              <th className="font-semibold p-2 border-2 text-blue-700">Company <br /> Address</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (<tr key={product.serial}>
              <td className="font-normal p-2 border-2 text-green-800">{product.serial}</td>
              <td className="font-normal p-2 border-2">{product.name}</td>
              <td className="font-normal p-2 border-2">{product.manufactureDate}</td>
              <td className="font-normal p-2 border-2">{product.expirationDate}</td>
              <td className="font-normal p-2 border-2">{product.registrationDate}</td>
              <td className="font-normal p-2 border-2">{product.manufacturer}</td>
              <td className="font-normal p-2 border-2">{product.address}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
      {showRegistrationForm && <motion.div initial={{right: -1000}} animate={{right: [-1000, 0]}} className="absolute bg-black top-0 w-full h-full z-20 bg-opacity-60">
        <div className="bg-white w-96 h-full opacity-100 absolute right-0 z-50 px-4">
            <div onClick={()=> setShowRegistrationForm(false)} className="relative t-32 p-2 cursor-pointer transform hover:scale-110 hover:bg-red-300 transition duration-150 ease-in"><ClearIcon /></div>
            <h1 className="font-semibold text-lg">Register New Product</h1>
            {error && <p className="p-2 bg-red-200 rounded-md w-11/12 mt-2 text-red-700 font-semibold">Please fill all details</p>}
            {sent && <p className="p-2 bg-green-200 rounded-md w-11/12 mt-2 text-green-700 font-semibold">Registration Successfull</p>}
            <form className="py-4 w-full" onSubmit={handleSubmit}>
              <p className="text-blue-500 mb-2 font-semibold">Name:</p>
              <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="w-11/12 p-2 mb-2 border-2 border-gray-300 rounded-md placeholder-gray-700" placeholder="Enter Product Name" />
              <p className="text-blue-500 mb-2 font-semibold">Company:</p>
              <input value={manufacturer} onChange={(e)=> setManufacturer(e.target.value)} type="text" className="w-11/12 p-2 mb-2 border-2 border-gray-300 rounded-md placeholder-gray-700" placeholder="Enter Company Name" />
              <p className="text-blue-500 mb-2 font-semibold">Company Address:</p>
              <input value={address} onChange={(e)=> setAddress(e.target.value)} type="text" className="w-11/12 p-2 mb-2 border-2 border-gray-300 rounded-md placeholder-gray-700" placeholder="Enter Company Address" />
              <p className="text-blue-500 mb-2 font-semibold">Production Date:</p>
              <input value={manufactureDate} onChange={(e)=> setManufactureDate(e.target.value)} type="text" className="w-11/12 p-2 mb-2 border-2 border-gray-300 rounded-md placeholder-gray-700" placeholder="Year-month-day" />
              <p className="text-blue-500 mb-2 font-semibold">Expiration Date:</p>
              <input value={expirationDate} onChange={(e)=> setExpirationDate(e.target.value)} type="text" className="w-11/12 p-2 mb-2 border-2 border-gray-300 rounded-md placeholder-gray-700" placeholder="Year-month-day" />

              <button type='submit' className="bg-blue-700 mt-4 text-white w-11/12 py-3 transform transition duration-200 hover:bg-blue-600 ">Register Product</button>
            </form>
        </div>
      </motion.div>}
      {showVerifyForm && <motion.div initial={{right: -1000}} animate={{right: [-1000, -20]}} className="absolute top-0 w-full h-full bg-white">
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

export default Content
