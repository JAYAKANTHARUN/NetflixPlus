import React, { useState , useEffect } from 'react'
import movieposter from '../images/movieposter.jpg'
import { FaPlay } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import movietrailer from '../images/movietrailer.mp4'

const ListItem = ({ index }) => {

    const [ishovered, setishovered] = useState(false)

    return (
        <div style={{ left: ishovered && index * 225 - 50 + index * 2.5 + 50 }} onMouseEnter={() => setishovered(true)} onMouseLeave={() => setishovered(false)} className=" hover:w-[325px] hover:h-[325px] hover:absolute hover:-top-[110px] w-[225px] h-[125px] rounded-md bg-[rgb(18,18,18)] overflow-hidden cursor-pointer text-white">
            <img className='w-[100%] object-cover  ' src={movieposter} alt="error" />
            {ishovered && (
                <>
                    <video className='absolute top-0 left-0 right-0 w-[100%] object-cover  ' autoPlay muted loop>
                        <source src={movietrailer} />
                    </video>
                    <div className='px-[20px] py-[10px] '>
                        <div className='flex justify-between items-center transition duration-3000 ease-in-out '>
                            <div className='flex gap-[15px] '>
                                <button className=' text-black hover:bg-[#ccc] text-[20px] bg-white rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out'><FaPlay className='m-auto mr-[8px]' /></button>
                                <button className=' text-white text-[30px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px] rounded-full w-[40px] h-[40px]'><BiPlus className='m-auto' /></button>
                                <button className=' text-white text-[25px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px]'><BiLike className='m-auto' /></button>
                                <button className=' text-white text-[25px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px]'><BiDislike className='m-auto' /></button>
                            </div>
                            <div>
                                <button className=' text-white text-[20px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px]'><BsChevronDown className='m-auto' /></button>
                            </div>
                        </div>
                        <div className='flex mt-[15px] mb-[5px] gap-[15px] items-center '>
                            <h1 className='text-green-600 font-poppins font-bold'>95% Match</h1>
                            <h1 className='font-poppins font-bold text-[#ccc] border-white border-[1px] p-[2px] '>+16</h1>
                            <h1 className='font-poppins font-bold text-[#ccc] '>1h 40m</h1>
                        </div>
                        <div className='flex gap-[5px] text-[14px] items-center text-white font-poppins font-bold mt-[10px] mb-[5px]'>
                            Rousing <GoDotFill className='text-[#ccc]' /> Adventure <GoDotFill className='text-[#ccc]' /> Visual Striking
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem