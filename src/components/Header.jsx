import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="flex justify-between p-5 max-w-[1850px] mt-2 m-auto items-center border-b border-gray-200">
        <div className="">
          <img className='h-10 cursor-pointer' src="Filled=Yes.svg" alt="brand logo" />
        </div>



        <div className="flex gap-10 items-center">
          <ul className="">
            <li className="flex gap-6 font-semibold ">
              <a className="hover:text-[#a87b00]" href="#">MENU</a>
              <a className="hover:text-[#a87b00]" href="#">LOCATION</a>
              <a className="hover:text-[#a87b00]" href="#">ABOUT</a>
              <a className="hover:text-[#a87b00]" href="#">CONTACT</a>
            </li>
          </ul>

          <button className="bg-[#222831] hover:bg-[#393E46] cursor-pointer px-5 py-1 text-white font-semibold rounded">
            Login
          </button>
        </div>

      </nav>
    </>
  )
}

export default Header

0
