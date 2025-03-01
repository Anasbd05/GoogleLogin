"use client"
import {supabase} from '@/lib/supabaseClient';
import Login from './login/page'
import React,{useEffect,useState} from 'react'

const Home = () => {
  const handleupload = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if(e.target.files) {
      file = e.target.files[0]
    }
    const {data,error} = await supabase.storage.from('images')
      .upload("public/" + file.name,file as File)

    if(data) {
      console.log(data)
    } else if(error) {
      console.log(error)
    }
  }
  const [user,setUser] = useState(null)

  const GetUser = async () => {
    const {data,error} = await supabase.auth.getSession()
    if(error) {
      console.log(error)
    } else if(!data) {
      console.log("no data")
    } else {
      setUser(data.session)
    }
  }

  useEffect(() => {
    GetUser()
  },[]) // Empty dependency array ensures it runs only once on mount

  console.log(user)

  return (
    <div className='flex my-10 flex-col items-center w-full justify-center h-screen'>
      <input onChange={(e) => handleupload(e)} type="file" accept='image/*'
        className='py-2 px-6 bg-gray-200 border-2 dark:bg-gray-800 rounded-full text-gray-800 ' id="file-image" />
      {/* <img src="https://ywsfekncwsrkyajnhcww.supabase.co/storage/v1/object/public/images/public/ScreenShot%20Tool%20-20250226062509.png" alt="" /> */}
      <Login />

    </div>
  )
}

export default Home
