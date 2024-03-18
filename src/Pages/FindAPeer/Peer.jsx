import React from 'react'
import Navbar from '../Navbar/Navbar'
import Suryansh from '../../../public/peers/Suryansh.jpg'

export default function Peer() {
  return (
    <>
    <Navbar className="z-10"/>
    <div className='flex flex-col items-center align-middle justify-center'>
        <div className='w-11/12 flex flex-row'>
            <div className='w-1/3 bg-black h-96'>
                <img src={Suryansh} className="h-full w-full"></img>
            </div>
            <div className='flex-1 px-4 flex flex-col min-h-96 justify-between'>
                <div className=''>
                    <h1 className='text-3xl'>Suryansh</h1>
                    <h1>Location: Patna</h1>
                    <h1>Interests: Football, Girls</h1>
                </div>
                <div className=''>
                <h1>Description</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia pariatur quas ea iure repellendus fuga, reprehenderit eaque illum! Error rerum obcaecati a aspernatur adipisci veniam ea harum. Iste, voluptas aliquid.</p>
                </div>
                <div className='bg-blue-800 w-fit py-1 px-4 rounded-lg border border-yellow-500 border-3 text-white'>Book a Session</div>
            </div>
      </div>
    </div>
    </>
  )
}
