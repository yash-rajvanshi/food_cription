import React from 'react'

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center py-10 max-w-[1200px] w-full'>
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl text-gray-600 font-bold'>Newsletter</h2>
                <h1 className='text-center text-5xl  bg-clip-text text-transparent font-medium bg-gradient-to-t from-teal-600 to-[#b8f808] py-3'>Enter Your Email Address<br /> To Register For Our Newsletter </h1>
                <div className='py-5 w-full flex justify-center items-center'>
                    <form className="flex flex-row items-center shadow-lg border-2 border-[#b8f808]/30 rounded-lg w-full">
                        <input type="email" id="email" name="email" placeholder="Enter your Email" className="focus:border-none text-grey w-[70%] py-3 px-5 rounded-lg" />
                        <button type="submit" className="text-white justify-center items-center py-3 rounded-lg w-[30%]  bg-gradient-to-b from-teal-600 to-[#b8f808]">Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Newsletter
