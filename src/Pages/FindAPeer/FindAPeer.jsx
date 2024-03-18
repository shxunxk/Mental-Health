import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
export default function FindAPeer() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-row justify-center'>
                    <div className='w-11/12 flex flex-col grid grid-cols-7 gap-2 items-center align-middle justify-center'>
                        <div key={1} className='border border-2 border-black border-opacity-30 rounded-lg flex flex-col justify-center align-middle items-center h-40 text-center '>
                                <img src='vite.svg' className='h-32' alt='an' />
                                <p className='h-8 font-bold text-lg'>Shauank</p>
                                <Link to='1'><p>Show Details</p></Link>
                            </div>
                            <div key={1} className='border border-2 border-black border-opacity-30 rounded-lg flex flex-col justify-center align-middle items-center h-40 text-center '>
                                <img src='vite.svg' className='h-32' alt='an' />
                                <Link to={`/profile/Shaunak`} className='h-8 font-bold text-lg'>Shauank</Link>
                                {/* <button onClick={() => handleAddFriend(1)}>Add Friend</button> */}
                            </div>
                            <div key={1} className='border border-2 border-black border-opacity-30 rounded-lg flex flex-col justify-center align-middle items-center h-40 text-center '>
                                <img src='vite.svg' className='h-32' alt='an' />
                                <Link to={`/profile/Shaunak`} className='h-8 font-bold text-lg'>Shauank</Link>
                                {/* <button onClick={() => handleAddFriend(1)}>Add Friend</button> */}
                            </div>
                            <div key={1} className='border border-2 border-black border-opacity-30 rounded-lg flex flex-col justify-center align-middle items-center h-40 text-center '>
                                <img src='vite.svg' className='h-32' alt='an' />
                                <Link to={`/profile/Shaunak`} className='h-8 font-bold text-lg'>Shauank</Link>
                                {/* <button onClick={() => handleAddFriend(1)}>Add Friend</button> */}
                            </div>
                            <div key={1} className='border border-2 border-black border-opacity-30 rounded-lg flex flex-col justify-center align-middle items-center h-40 text-center '>
                                <img src='vite.svg' className='h-32' alt='an' />
                                <Link to={`/profile/Shaunak`} className='h-8 font-bold text-lg'>Shauank</Link>
                                {/* <button onClick={() => handleAddFriend(1)}>Add Friend</button> */}
                            </div>
                            <div key={1} className='border border-2 border-black border-opacity-30 rounded-lg flex flex-col justify-center align-middle items-center h-40 text-center '>
                                <img src='vite.svg' className='h-32' alt='an' />
                                <Link to={`/profile/Shaunak`} className='h-8 font-bold text-lg'>Shauank</Link>
                                {/* <button onClick={() => handleAddFriend(1)}>Add Friend</button> */}
                            </div>
                    </div>
    </div>
    </>
    
  )
}
