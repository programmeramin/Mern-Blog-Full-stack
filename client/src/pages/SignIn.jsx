import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Spinner, Button, Alert, FloatingLabel, TextInput } from 'flowbite-react';
import { signInStart, signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error : errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) =>{
   
    setFormData({...formData, [e.target.id] : e.target.value.trim()});
  }   

  const handleSubmit = async (e) =>{
       e.preventDefault();

       if(!formData.email || !formData.password){
        return dispatch(signInFailure("Please fill all the fields"))
       }

       try {
           dispatch(signInStart());   
        const res = await fetch("/api/auth/signin", {
          method : "POST",
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify(formData),
             
        });
        const data = await res.json();
        if(data.success === false){
          dispatch(signInFailure(data.message))
        }
        if(res.ok === true){
          dispatch(signInSuccess(data))
          return navigate("/")
        }
        console.log(data)
       } catch (error) {
        dispatch(signInFailure(error.message))
       }   

  }

  console.log(formData);
  

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
          This is a demo project. You can sign in and login access your account.
        </p>
                 </div>
                 {/** Right side **/}
                 <div className="flex-1">
                  <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                     <div className="">

                         <FloatingLabel variant="standard" label="Your email" disabled={true} color='success'/>
                        <TextInput type='text' placeholder='name@company.com'
                        id='email' onChange={handleChange}/>

                         <FloatingLabel variant="standard" label="Your password" disabled={true} color='success'/>
                        <TextInput type='text' placeholder='password'
                        id='password' onChange={handleChange}/>
                     </div>
                      <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
                        {loading ? (
                          <>
                            <Spinner size='sm'/>
                            <span className='pl-3'>Loading....</span>
                          </>
                        ) : "Sign In"}
                      </Button>
                  </form>
                    <div className="flex gap-2 text-sm mt-5">
                      <span>Don't have an account?</span>
                      <Link to="/signup" className='text-blue-500'>Sign Up</Link>
                    </div>
                    {errorMessage && (
                      <Alert className='mt-5' color='failure' onDismiss={() =>dispatch(signInFailure())}>
                        {errorMessage}
                      </Alert>
                    )}
                 </div>
         </div>
      </div>

    </>
  )
}

export default SignIn
