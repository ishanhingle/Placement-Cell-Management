import React from 'react'
import Navbar from '../../components/shared/Navbar'
import PostNotice from './PostNotice'
import AllNotices from '../AllNotices'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function AdminNotices() {
  return (
    <div>
        <Navbar/>
        <div className='p-10'>
        <Button><Link to={'addNotice'}>Add a New Notice</Link></Button>
        </div>
        <AllNotices/>
    </div>
  )
}

export default AdminNotices