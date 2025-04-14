import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");


  const navigate = useNavigate();


  const {captain, setCaptain } = React.useContext(CaptainDataContext);
   const captainContext = useContext(CaptainDataContext);
    if (!userContext) {
      throw new Error("UserSignup must be used within a UserContextProvider");
    }

  const submitHandler = (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname:{
        firstname: firstname,
        lastname: lastname
      },          
      email: email,
      password: password,

    }
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('selectVehicleType')
  }



  return (
    <div className='p-7 pt-2 h-screen flex flex-col justify-between'>
      <div className='p-7 pt-5 pb-5'>
        <img className='w-16 mb-5' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => { submitHandler(e) }}>
            <h3 className='text-xl font-medium mb-2'>What's your name Captain!</h3>
            <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-gray-200   rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Firstname'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input
              className='bg-gray-200  rounded  px-4 py-2 w-1/2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>
          <h3 className='text-xl font-medium mb-2'>What's your email Captain!</h3>
          <input
            required
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-full border text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-full border text-lg placeholder:text-base'
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
            <h3 className='text-xl font-medium mb-2'>Enter Vehicle Details</h3>

            <div className='flex gap-4'>
            <input
            required
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
            type="text"
            placeholder='Vehicle Color'
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value)
            }}
          />
          <input
            required
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
            type="text"
            placeholder='Vehicle Plate'
            value={vehiclePlate}
            onChange={(e) => {
              setVehiclePlate(e.target.value)
            }}
          />
          </div>

          <div className='flex gap-4'>
          <input
            required
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
            type="text"
            placeholder='Vehicle Capacity'
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value)
            }}
          />
          <select
            required
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
            type="password"
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value)
            }}
          >
            <option value="selectVehicleType">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
            <option value="bus">Bus</option>
          </select>
          </div>
          
          
          <button className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign Up</button>

        </form>
        <p className='text-center'>Already a Captain? <Link to='/captain-login' className='text-blue-600' >Login</Link></p>
      </div>
      <div className='p-7'>
        <Link to='/signup'
          className='bg-[#A03A1E]  flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign Up as a User</Link>
      </div>
      <p className='text-[10px] leading-tight'>By using this website, you agree to our <Link to='/terms-conditions' className='text-blue-600'> Terms of Service </Link> and acknowledge our <Link to='/privacy-policy' className='text-blue-600'> Privacy Policy</Link>. Your data is handled securely and used in accordance with our policies. For more details, please review our full terms and privacy policy.</p>
    </div>
  )
}

export default CaptainSignup