import React, { useState , useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext'





const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const { user , setUser } = useContext(UserDataContext) ;

      const navigate = useNavigate();

    const submitHandler = async (e)=> {
        e.preventDefault();


        const userData = {
            email: email,
        password: password,
        };

        // console.log("Sending Data:", userData);

        try {
            const baseURL = import.meta.env.VITE_BASE_URL;
            const response = await axios.post(`${baseURL}/user/login`, userData);
    
            console.log("Data Submitted Successfully");
            
            console.log(response.status)// ✅ Log response data
    
            if (response.status === 200) {
                const data = response.data
                setUser(data.user);
                localStorage.setItem('token', data.token)
                navigate('/home');
            } 

            setUserData(
                {
                    Email:email,
                    Password:password,
                }
            )

            

            setEmail('');
            setPassword('');
    
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div className='p-7'>
                <img className='w-16 mb-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h3 className='text-xl font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        className='bg-gray-200 mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        className='bg-gray-200 mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <button className='bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                </form>
                    <p className='text-center'>New here? <Link to='/signup' className='text-blue-600' >Create new Account</Link></p>
            </div>
            <div className='p-7'>
                <Link to='/captain-login'
                    className='bg-[#10b461]  flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                >Sign in as Captain</Link>
            </div>
            <p className='text-[10px] leading-tight'>By using this website, you agree to our <Link to='/terms-conditions' className='text-blue-600'> Terms of Service </Link> and acknowledge our<Link to='/privacy-policy' className='text-blue-600'> Privacy Policy</Link>. Your data is handled securely and used in accordance with our policies. For more details, please review our full terms and privacy policy.</p>
        </div>
    )
}

export default UserLogin;