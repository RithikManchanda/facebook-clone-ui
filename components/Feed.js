import React from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'

const Feed = () => {
  return (
    <div className="flex-grow h-screen mt-6 mr-6 overflow-white-auto no-scrollbar">
        <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* craete Post */}
            <CreatePost/>
        {/* post */}
            <Posts/>
        </div>
    </div>
  )
}

export default Feed