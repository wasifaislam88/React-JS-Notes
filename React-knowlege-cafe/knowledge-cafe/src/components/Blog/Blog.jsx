import PropTypes from 'prop-types';
import { IoBookmarksOutline } from 'react-icons/io5';

const Blog = ({blog, handleAddToBookMark,  handleMarkAsRead}) => {
    const { id, title, cover, author,
         author_img, reading_time, 
         posted_date, hashtags } = blog;

    // console.log(blog);
    return (
        <div className='mb-20 space-x-4'>
            <img className='w-full mb-8' src={cover} 
            alt={`cover pic of the ${title}`} />
            <div className='flex flex-row justify-between'>
                <div className='flex justify-between mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>Posted: {posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                <button onClick={() => handleAddToBookMark(blog)} className='ml-2 text-2xl text-red-600'
                    ><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button 
            className='text-purple-800 font-bold underline' 
            onClick={() => handleMarkAsRead(id, reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;