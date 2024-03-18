import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Connection() {
  return (
    <>
    <div className='flex flex-col justify-center align-middle items-center text-black'>
        <Navbar/>
        <div className="flex gap-2 w-11/12">
            <div className="w-1/4">
                <h1 className="bg-white text-2xl pl-4 pt-4 font-bold rounded-t-lg">Chats</h1>
                <div id='chats' className='flex flex-row border border-2 border-b-black border-opacity-25 text-black text-lg h-12 p-2 gap-5'>
                    <img src='vite.svg'></img>
                    <div className='flex-1'><p>Mathew</p></div>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='bg-white text-2xl pl-4 pt-4 font-bold rounded-t-lg mb-4'>Pending Requests</h1>
                <div className='flex grid grid-cols-2 mb-10'>
                    <div id='current' className='border border-2 border-b-black border-opacity-25 text-black text-lg justify-between grid grid-cols-2'>
                        <div className='flex pl-3'><img src='vite.svg'></img>
                        <div className='pl-3 h-12 p-2 gap-5'><p>Mathew</p></div></div>
                        <div className="gap-3 flex text-sm"><div className='bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white  hover:bg-white hover:text-black'>Accept</div><button className='bg-black w-fit px-4 rounded-lg border border-black text-white hover:bg-white hover:text-black'>Decline</button></div>  
                    </div>
                    <div id='current' className='border border-2 border-b-black border-opacity-25 text-black text-lg justify-between grid grid-cols-2'>
                        <div className='flex pl-3'><img src='vite.svg'></img>
                        <div className='pl-3 h-12 p-2 gap-5'><p>Mathew</p></div></div>
                        <div className="gap-3 flex text-sm"><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white  hover:bg-white hover:text-black'>Accept</button><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white hover:bg-white hover:text-black'>Decline</button></div>  
                    </div>
                    <div id='current' className='border border-2 border-b-black border-opacity-25 text-black text-lg justify-between grid grid-cols-2'>
                        <div className='flex pl-3'><img src='vite.svg'></img>
                        <div className='pl-3 h-12 p-2 gap-5'><p>Mathew</p></div></div>
                        <div className="gap-3 flex text-sm"><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white  hover:bg-white hover:text-black'>Accept</button><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white hover:bg-white hover:text-black'>Decline</button></div>  
                    </div>
                </div>
                <h1 className='bg-white text-2xl pl-4 pt-4 font-bold rounded-t-lg mb-4'>People you might know</h1>
                    {/* <div id='current' className='border border-2 border-b-black border-opacity-25 text-black text-lg justify-between grid grid-cols-2'>
                        <div className='flex pl-3'><img src='vite.svg'></img>
                        <div className='pl-3'><p>Mathew</p></div></div>
                        <div className="gap-3 flex text-sm"><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white  hover:bg-white hover:text-black'>Accept</button><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white hover:bg-white hover:text-black'>Decline</button></div>  
                    </div>
                    <div id='current' className='border border-2 border-b-black border-opacity-25 text-black text-lg justify-between grid grid-cols-2'>
                        <div className='flex pl-3'><img src='vite.svg'></img>
                        <div className='pl-3'><p>Mathew</p></div></div>
                        <div className="gap-3 flex text-sm"><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white  hover:bg-white hover:text-black'>Accept</button><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white hover:bg-white hover:text-black'>Decline</button></div>  
                    </div>
                    <div id='current' className='border border-2 border-b-black border-opacity-25 text-black text-lg justify-between grid grid-cols-2'>
                        <div className='flex pl-3'><img src='vite.svg'></img>
                        <div className='pl-3'><p>Mathew</p></div></div>
                        <div className="gap-3 flex text-sm"><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white  hover:bg-white hover:text-black'>Accept</button><button className='mr-3 bg-black w-fit py-1 px-4 rounded-lg border border-black border-3 text-white hover:bg-white hover:text-black'>Decline</button></div>  
                    </div> */}
                    <div className='flex grid grid-cols-5 gap-2'>
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
        </div>
    </div>
    </>
  )
}
