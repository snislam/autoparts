import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery("blogs", () => fetch('https://morning-bayou-19534.herokuapp.com/blogs').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-primary mt-5'>Our Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog._id} />)
                }
            </div>
        </div>
    );
};

export default Blogs;