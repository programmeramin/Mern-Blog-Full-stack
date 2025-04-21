import { Button } from 'flowbite-react'
import React from 'react'
import {AiFillGoogleCircle} from "react-icons/ai"
import {GoogleAuthProvider, signInAnonymously} from "firebase/auth";

const OAuth = () => {

    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: "select_account"});

        try {
          const resultFromGoogle = await signInAnonymously(AuthenticatorAssertionResponse, provider);
        } catch (error) {
          console.log(error)
          
        }

    }

  return (
    <>
      
      <Button type='button' gradientDuoTone="pinkToOrange" outline>
         <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
         Continue with Google
      </Button>

    </>
  )
}

export default OAuth
