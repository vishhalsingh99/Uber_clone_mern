import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext'


const UserSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  


  const navigate = useNavigate();

  
  const { User, setUser } = userContext;
  
  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
        fullname: {
            firstname: firstname,
            lastname: lastname,
        },
        email: email,
        password: password,
    };

    // console.log("Sending Data:", newUser);  // ✅ Log request data

    try {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const response = await axios.post(`${baseURL}/user/register`, newUser);

        console.log("Data Submitted Successfully");  // ✅ Log response data

        if (response.status === 201) {
            setUser(response.data.user);
            localStorage.setItem('token', data.token);
            navigate('/login');
        }

        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');

    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
};



  return (
    <div className='p-7 pt-2 h-screen flex flex-col justify-between'>
      <div className='p-7 pt-4 pb-5'>
        <img className='w-16 mb-7' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <form onSubmit={(e) => { submitHandler(e) }}>
            <h3 className='text-xl font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-gray-200 rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Firstname'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input
              className='bg-gray-200 rounded  px-4 py-2 w-1/2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>
          <h3 className='text-xl font-medium mb-2'>What's your email</h3>
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
          <button className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign Up</button>

        </form>
        <p className='text-center'>Already have account? <Link to='/login' className='text-blue-600' >Login</Link></p>
      </div>
      <div className='p-7'>
        <Link to='/captain-signup'
          className='bg-[#10b461]  flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign Up as Captain</Link>
      </div>
      <p className='text-[10px] leading-tight'>By using this website, you agree to our <Link to='/terms-conditions' className='text-blue-600'> Terms of Service </Link> and acknowledge our<Link to='/privacy-policy' className='text-blue-600'> Privacy Policy</Link>. Your data is handled securely and used in accordance with our policies. For more details, please review our full terms and privacy policy.</p>
    </div>
  )
}

export default UserSignup;