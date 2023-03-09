import React from 'react'
import { BiSearch } from "react-icons/bi"
import { RiVideoAddFill } from "react-icons/ri"
import { CgMoreAlt } from "react-icons/cg"
import Contacts from './Contacts'

const RightSideBar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
            <p className="flex text-lg font-semibold flex-grow">Contacts</p>
            <div className="flex space-x-1 px-2">
                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                    <RiVideoAddFill/>
                </div>

                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                    <BiSearch/>
                </div>

                <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                    <CgMoreAlt/>
                </div>
            </div>

        </div>
        <Contacts src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600 " name="Rithik Manchanda" status="online"/>
        <Contacts src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Rishab Arora" status="online"/>
        <Contacts src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600 " name="Arpit Singh" status="offline"/>
        <Contacts src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600 " name="Harhita Bansal" status="online"/>

    </div>
  )
}

export default RightSideBar