import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-8">
        <Image src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png" height={240} width={240}/>
        <a onClick={signIn} className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">Login With Facebook</a>
    </div>
  )
}

export default Login