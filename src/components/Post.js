import React from 'react'
import { 
    UserIcon,
    ChatIcon,
    HeartIcon,
    DotsHorizontalIcon
} from '@heroicons/react/outline'
import Commentsection from './Commentsection'

function Post() {
  return (
    <div className='bg-[#13192b] w-4/5 h-[52em] p-2 rounded-xl shadow-sm sm:w-4/5'>
        <div className='post-head flex items-center'>
            <UserIcon className='h-8 text-gray-500 hover:text-yellow-400 cursor-pointer' />
            <p className='ml-2'>Irtaza</p>
            <small className='ml-2 text-[10px] cursor-pointer hover:text-yellow-400'>@irtaza123</small>
        </div>
        <div className='post-text p-3'>
            <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit pretium ut convallis tortor, auctor senectus massa bibendum.</p>
        </div>
        <div className='post-image mt-2 flex justify-center'>
            <img className="object-contain max-w-4/5 sm:max-w-4/5 max-h-[30em]" src={require("../Assets/modal.jpg")} alt="#" />
        </div>
        <div className='post-items flex mt-2'>
            <ChatIcon className='h-7 ml-2 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
            <HeartIcon className='h-7 ml-2 text-gray-500 hover:text-yellow-400 cursor-pointer'/>
        </div>
        <div className='post-commentsection mt-4 h-[30px]  border-none bg-[#19223d] rounded-3xl'>
            <input className="resize-none bg-transparent text-sm ml-4 w-full focus:outline-none text-white" type='text' placeholder="Say Somthing..."/>
        </div>
        <div className='max-h-[7em] overflow-y-scroll scrollbar-hide'>
            <Commentsection />
            <Commentsection />
            <Commentsection />
            <Commentsection />
        </div>
    </div>
  )
}

export default Post