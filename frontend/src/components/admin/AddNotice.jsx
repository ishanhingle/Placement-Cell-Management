import React from 'react'
import Navbar from '../shared/Navbar'
import PostNotice from './PostNotice'

function AddNotice() {
  return (
    <div>
        <Navbar/>
        <PostNotice placeholder={"start typing"}/>
    </div>
  )
}

export default AddNotice