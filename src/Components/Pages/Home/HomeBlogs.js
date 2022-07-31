import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blogs/Blog';
import { Link } from 'react-router-dom'

const HomeBlogs = () => {
    const [blogs, setBlogs] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/home-blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='pb-20 flex flex-col items-center'>
            <h2 className='text-5xl text-secondary text-center font-bold py-12'>Our Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    blogs?.map(blog => <Blog key={blog._id} blog={blog} />)
                }
            </div>
            <button className='bg-indigo-900 py-3 px-10 text-slate-50'><Link to="/blogs">See All</Link> </button>
        </div>
    );
};

export default HomeBlogs;