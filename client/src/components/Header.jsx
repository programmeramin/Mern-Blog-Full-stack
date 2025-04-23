import { Avatar, Button, Dropdown, DropdownItem, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon} from "react-icons/fa"
import React from 'react'
import {useSelector} from "react-redux"

const Header = () => {

  const path = useLocation().pathname;
  const {currentUser} = useSelector((state) => state.user);

  return (
    <>    

    <Navbar className='border-b-2 '>
        <Link to="/"   className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>AMIN'S</span>
          BLOG
        </Link>
         <form>    
          <TextInput
          type='text' placeholder='Search....' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
         </form>  
          <Button className='w-12 h-12 lg:hidden' color="gray" pill>
             <AiOutlineSearch/>
          </Button>

                <div className="flex gap-2 md:order-2">
                  <Button className='w-12 h-12 hidden sm:inline' color="gray" pill>
                     <FaMoon/>
                  </Button>
                  
                  {currentUser ? (
                    
                    <Dropdown>
                      <Avatar alt='user' img={currentUser?.profilePicture} rounded/>                   
                      <DropdownItem>@{currentUser.username}</DropdownItem>
                      <DropdownItem>{currentUser.email}</DropdownItem>
                       <Link to="/dashboard?tab=profile">
                        <DropdownItem>Profile</DropdownItem>
                       </Link>
                    </Dropdown>
                    
                    
                  ) : (
                    <Link to="/signin">
                    <Button gradientDuoTone="purpleToBlue">
                     Sign In
                    </Button>
                   </Link>
                  )}

                <NavbarToggle />
                </div>

                <NavbarCollapse>
                     <NavbarLink active={path === "/"} as={"div"}>
                        <Link to="/">
                         HOME</Link>
                     </NavbarLink>
                     <NavbarLink active={path === "/about"} as={"div"}>
                        <Link to="/about">
                         ABOUT</Link>
                     </NavbarLink>
                     <NavbarLink active={path === "/projects"} as={"div"}>
                        <Link to="/projects">
                         PROJECTS</Link>
                     </NavbarLink>
                  </NavbarCollapse>
                  

    </Navbar>
      
    </>
  )
}

export default Header
