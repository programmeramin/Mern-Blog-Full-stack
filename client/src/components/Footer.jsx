import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import React from 'react'
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
   <Footer container className="border-t-8 border-teal-500">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-7">
          <Link to="/"   className='font-bold dark:text-white text-3xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>AMIN'S</span>
          BLOG
        </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#">100 JS Projects</FooterLink>
                <FooterLink href="#">Amin's Blog</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Amin's Blog" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="https://www.facebook.com/programmeraminislam" icon={BsFacebook} />
            <FooterIcon href="https://www.instagram.com/programmer_amin" icon={BsInstagram} />
            <FooterIcon href="https://x.com/programmeramin_" icon={BsTwitter} />
            <FooterIcon href="https://github.com/programmeramin" icon={BsGithub} />
            <FooterIcon href="https://www.linkedin.com/in/programmeramin" icon={FaLinkedin} />
          </div>
        </div>
      </div> 
    </Footer>
    </>
  )
}

export default FooterComponent   
