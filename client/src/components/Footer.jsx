import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <>
      <Footer className='border border-t-8 border-teal-500'>
        <div className="">
          <div className="">
            <div className="">
             <Link to="/"   className='font-bold dark:text-white text-4xl'>
             <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>AMIN'S</span>
          BLOG
        </Link>
            </div>

              <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <Footer.Title/>

              </div>

          </div>
        </div>
           
      </Footer>
    </>
  )
}

export default FooterComponent   
