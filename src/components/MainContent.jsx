import React from 'react'

const MainContent = () => {
    return (
        <>
            <div className=" h-240 w-full p-11 max-w-[1850px] m-auto flex sm:flex-row flex-col ">
                <div className="p-12 h-full w-[50%]  flex flex-col cursor-default justify-center">
                    <h1 className="font-extrabold text-[#222831] text-8xl">THE PREFECT FINISHING TOUCH TO ANY OUTFIT</h1>

                    <p className="w-md  mt-10 p-3 cursor-default">Jewellery has the power to be this one little thing that can make you feel unique</p>

                    <div className="flex mt-5 gap-5 justify-center w-80 pr-18">
                        <button className="bg-[#222831] hover:bg-[#393E46] font-semibold rounded cursor-pointer text-white px-4 py-1">Shop Now</button>
                        <button className="bg-white hover:bg-gray-300 cursor-pointer font-semibold rounded border px-4 py-1">Category</button>
                    </div>

                    <p className="mt-5 ml-3">Also Available On</p>

                    <div className="ml-6 mt-6 gap-5 flex">
                        <img className='cursor-pointer' src="\public\flipkart.png" alt="" />
                        <img className='cursor-pointer' src="\public\amazon.png" alt="" />
                    </div>

                </div>
                <div className=" h-full w-[50%] flex justify-center items-center relative ">

                    <img className='h-9/12 z-1 mb-15 bg-blend-darken absolute duration-300 delay-200 ' src="\public\ring.png" alt="ring image" />

                    <img className='relative scale-120 sm:w-2xl' src="\public\mandala.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default MainContent
