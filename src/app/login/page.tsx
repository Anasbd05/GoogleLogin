"use client"
import {supabase} from '@/lib/supabaseClient'

const Login = () => {
    const loginWithGoogle = async () => {
        supabase.auth.signInWithOAuth({
            provider: "google"
        })
    }



    return (
        <div className='flex items-center h-screen justify-center'>
            <div className="w-3/4 md:w-2/4 flex flex-col items-center border border-gray-200 p-6 shadow-md">
                <h1 className='text-4xl text-center font-bold'>Login</h1>
                <button onClick={loginWithGoogle} className='my-4 bg-sky-300 py-2 px-6 hover:opacity-80'>LOGIN WITH GOOGLE</button>
            </div>
        </div>
    )
}

export default Login
