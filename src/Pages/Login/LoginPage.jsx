import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import {doSignInWithEmailAndPassword} from '../../firebase/auth'
import {useAuth} from '../../contexts/authContext'
import { useState } from 'react'

export default function Login() {

  const {userLoggedIn} = useAuth()

  const [email, setEmail] = useState('ssnagvenkar@gmail.com')
  const [password, setPassword] = useState('VITVELLORE')
  const [isSignedIn, setSignedIn] = useState(true)

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSignedIn) {
      setSignedIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
    {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
      <div className="w-1/3 bg-yellow-500 flex flex-col h-screen align-middle justify-center items-center rounded-r-3xl">
        <div className="w-2/3 bg-white rounded-2xl border border-10 border-black border-opacity-20 flex flex-col align-middle min-h-96 py-5">
          <form type='submit' onSubmit={onSubmit} className='px-10 flex flex-col justify-center align-middle items-center'>
          <img src='logo.jpg' alt='' className='h-24 w-24 mt-10 mb-10'></img>
          <div className='flex flex-col justify-center mb-2'>
            <input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} className='rounded-lg border border-sm border-b-black border-opacity-30 h-8 w-full p-2 mb-8'></input>
            <input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} className='rounded-lg border border-sm border-b-black border-opacity-30 h-8 w-full p-2 mb-8'></input>
          </div>
          </form>
          <div className='flex flex-row justify-center'>
            <button className="bg-blue-800 w-fit py-1 px-4 rounded-lg mb-4 border border-yellow-500 border-3 text-white">Log In</button>
          </div>
          <Link to='#' className="text-center">Not a member?</Link>
        </div>
      </div>
    </>
  )
}
