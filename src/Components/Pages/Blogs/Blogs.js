import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading } = useQuery("blogs", () => fetch('blogs.json').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-primary mt-5'>Question and answer</h1>
            <div>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default Blogs;