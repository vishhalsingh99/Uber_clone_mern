import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [CaptainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: Email,
            password: Password
        })
        setEmail('');
        setPassword('');
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div className='p-7'>
                <img className='w-16 mb-8' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => { submitHandler(e) }}>
                    <h3 className='text-xl font-medium mb-2'>What's your email Captain!</h3>
                    <input
                        required
                        className='bg-gray-200 mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />
                    <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        className='bg-gray-200 mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base'
                        type="password"
                        placeholder='Password'
                    />
                    <button className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                </form>
                <p className='text-center'>"Become a Captain now!" <Link to='/captain-signup' className='text-blue-600' >Register as Captain</Link></p>
            </div>
            <div className='p-7'>
                <Link to='/login'
                    className='bg-[#A03A1E]  flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                >Sign in as User</Link>
            </div>
            <p className='text-[10px] leading-tight'>By using this website, you agree to our <Link to='/terms-conditions' className='text-blue-600'> Terms of Service </Link> and acknowledge our<Link to='/privacy-policy' className='text-blue-600'> Privacy Policy</Link>. Your data is handled securely and used in accordance with our policies. For more details, please review our full terms and privacy policy.</p>
        </div>
    )
}

export default CaptainLogin