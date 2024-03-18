import React from 'react'

export default function Login() {
  return (
    <>

      <div className="bg-yellow-300 flex flex-col h-screen align-middle justify-center items-center rounded-3xl">
        <div className="w-4/12 bg-white">
          <form type='submit' className='p-10'>
            <input placeholder='Username' className='rounded-lg border border-sm border-black border-opacity-30 h-8 w-4/5'></input>
          </form>
        </div>
      </div>
    </>
  )
}
