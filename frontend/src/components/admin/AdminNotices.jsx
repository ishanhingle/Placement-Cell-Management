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
        <Button><Link to={'addNotice'}>Add a New Notice</Link></Button>
        <AllNotices/>
    </div>
  )
}

export default AdminNotices