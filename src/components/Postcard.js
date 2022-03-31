import React from 'react'
import { 
    PhotographIcon,
    MicrophoneIcon,
    PlusIcon, 
    UserIcon
} from '@heroicons/react/outline'

function Postcard() {
  return (
    <div className='bg-[#13192b] w-4/5 h-[150px] p-2 rounded-xl shadow-sm sm:w-3/5'>
        <div className='flex mt-2 ml-2'>
            <UserIcon  className='h-8 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
            <textarea className="resize-none bg-transparent text-lg ml-2 w-full h-[80px] focus:outline-none text-white overflow-y-hidden" type='text' placeholder="What's in your mind..." />
        </div>
        <div className='flex justify-between'>
            <div className='flex mt-2'>
                <PhotographIcon className='h-6 ml-6 text-gray-500 hover:text-yellow-400 hover:h-7 cursor-pointer'/>
                <MicrophoneIcon className='h-6 ml-2 text-gray-500 hover:text-yellow-400 hover:h-7 cursor-pointer'/>
                <PlusIcon className='h-6 ml-2 text-gray-500 hover:text-yellow-400 hover:h-7 cursor-pointer'/>
            </div>
            <div className='bg-gray-700 flex justify-center mr-7 p-2 rounded-xl'>
                <small className='text-sm hover:text-yellow-400 hover:text-[15px] cursor-pointer'>POST</small>
            </div>
        </div>
    </div>
  )
}

export default Postcard