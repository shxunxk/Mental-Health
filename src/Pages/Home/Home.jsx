import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar/>
        <div className='w-11/12 flex flex-row'>
          <div className='flex flex-col flex-1 align-middle items-center p-4 pl-8'>
              <h1 className="text-6xl mb-20">"Guiding You Through Life's Challenges: Your Path to Healing and Growth"</h1>
              <p className='text-bold text-2xl mb-10'>Connect with those who have first hand experience of the situtaion as you.</p>
              <div className='flex flex-row justify-start items-start gap-4'>
                <Link to='#'><p className='bg-blue-800 w-fit py-1 px-4 rounded-lg border border-yellow-500 border-3 text-white'>Find a Peer for Conversation</p></Link>
                <Link to='#'><p className='bg-blue-800 w-fit py-1 px-4 rounded-lg border border-yellow-500 border-3 text-white'>Explore Support Groups</p></Link>
              </div>
          </div>
          <div className='flex-1'>
              <img src='home.jpg'></img>
          </div>
        </div>
      </div>
    </>
  )
}
