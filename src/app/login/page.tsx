"use client"
import {supabase} from '@/lib/supabaseClient'
import {useState} from 'react'

const Login = () => {

    const [Email,setEmail] = useState('')

    const loginWithGoogle = async () => {
        supabase.auth.signInWithOAuth({
            provider: "google"
        })
    }

    const loginWithEmail = async () => {
        supabase.auth.signInWithOtp({
            email: Email
        })
    }





    return (
        <div className='flex items-center h-screen justify-center'>
            <div className="w-3/4 md:w-2/4 mx-auto flex flex-col items-center border border-gray-200 p-6 shadow-md">
                <h1 className='text-4xl text-center font-bold'>Login</h1>
                <button onClick={loginWithGoogle} className='my-4 bg-sky-300 py-2 px-6 hover:opacity-80'>LOGIN WITH GOOGLE</button>
                <div>
                    <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" className='py-2 bg-gray-200 outline-0 px-4' placeholder='email' />
                    <button onClick={loginWithEmail} className='my-4 bg-sky-300 py-2 px-6 hover:opacity-80'>LOGIN WITH EMAIL</button>
                </div>
            </div>

        </div>
    )
}

export default Login
