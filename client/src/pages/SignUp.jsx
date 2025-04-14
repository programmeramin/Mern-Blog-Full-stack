import { Button, FloatingLabel , TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <> 
      
      <div className='min-h-screen mt-20'>
         <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
          {/** Left side */}
            <div className="flex-1">
            <Link to="/"   className='font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>AMIN'S</span>
          BLOG
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project. You can sign up and create an account.
        </p>
                 </div>
                 {/** Right side */}
                 <div className="flex-1">
                  <form className='flex flex-col gap-5'>
                     <div className="">

                        <FloatingLabel variant="standard" label="Your username" disabled={true} color='success'/>
                        <TextInput type='text' placeholder='Username'
                        id='username' />

                         <FloatingLabel variant="standard" label="Your email" disabled={true} color='success'/>
                        <TextInput type='text' placeholder='name@company.com'
                        id='email'/>

                         <FloatingLabel variant="standard" label="Your password" disabled={true} color='success'/>
                        <TextInput type='text' placeholder='passwordd'
                        id='password'/>
                     </div>
                      <Button gradientDuoTone="purpleToPink" type='submit'>Sign up</Button>
                  </form>
                    <div className="flex gap-2 text-sm mt-5">
                      <span>Have an account?</span>
                      <Link to="/sign-in" className='text-blue-500'>Sign In</Link>
                    </div>
                 </div>
         </div>
      </div>

    </>
  )
}

export default SignUp
