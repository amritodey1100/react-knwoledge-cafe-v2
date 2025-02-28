
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Min read</span>
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
Blog.proptypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;