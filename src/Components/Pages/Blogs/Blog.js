import React from 'react';
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
    const { question, answer, featured_img, author, date, _id } = blog;
    let excerpt;
    if (answer.length > 110) {
        excerpt = answer.slice(0, 110)
    } else {
        excerpt = answer
    }
    return (
        <div className='p-5 m-5'>
            <img src={featured_img} alt={question} />
            <div className='flex flex-row items-center my-3'>
                <p className='text-sm font-semibold mr-5'>Author: {author}</p>
                <p className='text-sm font-semibold'>Date: {date}</p>
            </div>
            <h2 className='text-2xl font-semibold'>{question}</h2>
            <p className='text-normal my-3'>{excerpt} <Link to={`/blog/${_id}`} className='text-orange-500' >Read More</Link></p>
        </div>
    );
};

export default Blog;