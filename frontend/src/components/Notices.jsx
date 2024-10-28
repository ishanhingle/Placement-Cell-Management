import React from 'react'
import Navbar from './shared/Navbar'
import AllNotices from './AllNotices'

function Notices() {
  return (
    <div>
        <Navbar/>
        <h1 className=' text-center text-2xl font-medium'>Notices</h1>
        <AllNotices/>
    </div>
  )
}

export default Notices