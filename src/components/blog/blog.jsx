import { FaBookmark } from 'react-icons/fa';
import './blog.css'; // Import the CSS file for the animation

import PropTypes from 'prop-types';
const Blog = ({ blog, handleBookmark }) => {
    const {title,cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Min read</span>
                    <button 
                        className='ml-2 text-red-600 click-animation text-2xl' 
                        onClick={() => handleBookmark(blog)}
                    >
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => (
                        <span key={index} className='mr-2'>#{hashtag}</span>
                    ))
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}
export default Blog;