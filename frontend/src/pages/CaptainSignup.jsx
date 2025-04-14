import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [UserData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname:{
        firstname: Firstname,
        lastname: Lastname
      },          
      email: Email,
      password: Password,

    })
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
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
              value={Firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input
              className='bg-gray-200  rounded  px-4 py-2 w-1/2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Lastname'
              value={Lastname}
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
            value={Email}
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
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
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