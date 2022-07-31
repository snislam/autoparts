import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPage = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const { featured_img, question, answer, author, date } = blog
    useEffect(() => {
        fetch(`https://morning-bayou-19534.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])
    return (
        <div className='max-w-screen-sm mx-auto px-2 md:px-0'>
            <h1 className='text-4xl font-bold mt-5'>{question}</h1>
            <div className='flex flex-row items-center my-3'>
                <p className='text-sm font-semibold mr-5'>Author: {author}</p>
                <p className='text-sm font-semibold'>Date: {date}</p>
            </div>
            <img src={featured_img} alt={question} />
            <p className='py-10 px-3 text-xl text-slate-700'>{answer}</p>
        </div>
    );
};

export default SingleBlogPage;