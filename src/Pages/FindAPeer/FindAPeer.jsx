import React from 'react'
import { Link } from 'react-router-dom'
export default function FindAPeer() {
  return (
    <>
    <div className='flex flex-col items-center'>
    <div className='w-11/12 flex grid grid-cols-5 gap-2'>
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
