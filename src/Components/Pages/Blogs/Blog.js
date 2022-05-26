import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer } = blog
    return (
        <div className='p-5 m-5'>
            <h2 className='text-2xl font-semibold my-3'>{question}</h2>
            <p className='text-normal my-3'>{answer}</p>
        </div>
    );
};

export default Blog;