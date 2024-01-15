import React from 'react'
import { FaGithub, FaLinkedinIn, FaWordpress} from "react-icons/fa";
import { FaSquareXTwitter, FaShopify } from "react-icons/fa6";
import { FaReact, FaBootstrap} from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.github.com/engrkashifkhanniazi"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/kashif-khan-niazi/"><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.twitter.com/kashifkniazi"><FaSquareXTwitter /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className='bannerIcon'>
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
            <span className='bannerIcon'>
              <SiTailwindcss />
            </span>
            <span className='bannerIcon'>
              <FaWordpress />
            </span>
            <span className='bannerIcon'>
              <FaShopify />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media