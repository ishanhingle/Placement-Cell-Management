import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Official Centralized Placement Portal of DAVV</span>
                <h1 className='text-5xl font-bold'>Launch Your Career <br /> with  <span className='text-[#6A38C2]'>DAVV's Placement Cell.</span></h1>
                <p className='mx-10'>The Centralized Placement Cell at DAVV is dedicated to guiding students towards successful career paths by connecting them with industry leaders, fostering skill development, and offering personalized career support. We collaborate with renowned companies to provide tailored opportunities that align with the academic and professional aspirations of our students. Beyond job placements, we focus on preparing students for real-world challenges through training programs, workshops, and one-on-one counseling. Our mission is not just to help students secure jobs but to build confident, well-rounded professionals ready to excel in their careers.</p>
            </div>
        </div>
    )
}

export default HeroSection