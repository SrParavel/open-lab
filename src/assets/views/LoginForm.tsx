import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className='w-full h-screen flex'>
            {/* Left half of the screen - background styling */}
            <div className='w-1/2 h-full flex flex-col bg-[#b0bacf] items-center justify-center'>
            </div>

            {/* Right half of the screen - login form */}
            <div className='w-1/2 h-full flex flex-col p-20 justify-center'>
                <div className='w-full flex flex-col max-w-[450px] mx-auto'>
                    {/* Header section with title and welcome message */}
                    <div className='w-full flex flex-col mb-10'>
                        <h3 className='text-4xl font-bold mb-2 dark:text-white'>Login</h3>
                        <p className='text-lg mb-4 dark:text-white'>Welcome Back! Please enter your details.</p>
                    </div>

                    {/* Input fields for email and password */}
                    <div className='w-full flex flex-col mb-6'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-full text-black py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input
                            type='password'
                            placeholder='Password'
                            className='w-full text-black py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {/* Button to log in with email and password */}
                    <Button
                        variant='primary'
                        onClick={handleSubmit}
                        disabled={!email || !password}>
                        Log In With Email
                    </Button>

                    {/* Display error message if there is one */}
                    <div className='w-full flex items-center justify-center mt-4'>
                        {/* Placeholder for error message */}
                        {/* {error && <p className='text-red-500'>{error}</p>} */}
                    </div>

                    {/* Divider with 'OR' text */}
                    <div className='w-full flex items-center justify-center relative py-4'>
                        <div className='w-full h-[1px] bg-gray-500'></div>
                        <p className='text-lg absolute text-gray-500 bg-[#ffffff] px-2'>OR</p>
                    </div>

                    {/* Button to log in with Google */}
                    <Button
                        variant='secondary'
                        //onClick={signInWithGoogle}
                        //disabled={authing}>
                        >Log In With Google
                    </Button>
                </div>

                {/* Link to sign up page */}
                <div className='w-full flex items-center justify-center mt-10'>
                    <p className='text-sm font-normal text-black'>Don't have an account? <span className='font-semibold text-black cursor-pointer underline'><a href='/signup'>Sign Up</a></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;